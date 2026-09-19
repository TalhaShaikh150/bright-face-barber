"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import CalendarPicker from '@/components/CalendarPicker';
import { FaCheckCircle, FaExclamationCircle, FaSpinner, FaClock } from 'react-icons/fa';

// Available discrete appointment times at 33 Newman Street
export const TIME_SLOTS = [
  { id: '10:00', label: '10:00 am', hour: 10, minute: 0 },
  { id: '11:00', label: '11:00 am', hour: 11, minute: 0 },
  { id: '12:00', label: '12:00 pm', hour: 12, minute: 0 },
  { id: '13:00', label: '1:00 pm', hour: 13, minute: 0 },
  { id: '14:00', label: '2:00 pm', hour: 14, minute: 0 },
  { id: '15:00', label: '3:00 pm', hour: 15, minute: 0 },
  { id: '16:00', label: '4:00 pm', hour: 16, minute: 0 },
  { id: '17:00', label: '5:00 pm', hour: 17, minute: 0 },
  { id: '18:00', label: '6:00 pm', hour: 18, minute: 0 },
  { id: '19:00', label: '7:00 pm', hour: 19, minute: 0 },
];

// Helper to determine slot availability and operating hours
export const getSlotStatus = (slot, dateStr) => {
  if (!slot) return { available: false, label: '' };
  if (!dateStr) return { available: true, label: slot.label };

  const [y, m, d] = dateStr.split('-').map(Number);
  const selectedDate = new Date(y, m - 1, d);
  selectedDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Past dates are strictly unavailable
  if (selectedDate < today) {
    return { available: false, label: `${slot.label} — Passed`, reason: 'passed' };
  }

  const dayOfWeek = selectedDate.getDay();

  // Operating Hours checks:
  // Sunday: 11:00 am — 5:00 pm (last appointment 4:00 pm)
  if (dayOfWeek === 0) {
    if (slot.hour < 11 || slot.hour >= 17) {
      return { available: false, label: `${slot.label} — Studio Closed`, reason: 'closed' };
    }
  }
  // Saturday: 10:00 am — 7:00 pm (last appointment 6:00 pm)
  else if (dayOfWeek === 6) {
    if (slot.hour < 10 || slot.hour >= 19) {
      return { available: false, label: `${slot.label} — Studio Closed`, reason: 'closed' };
    }
  }
  // Mon–Fri: 10:00 am — 8:00 pm (last appointment 7:00 pm)
  else {
    if (slot.hour < 10 || slot.hour >= 20) {
      return { available: false, label: `${slot.label} — Studio Closed`, reason: 'closed' };
    }
  }

  // Today checks: block past time slots
  if (selectedDate.getTime() === today.getTime()) {
    const now = new Date();
    // Mark as passed if current time is past slot start
    if (now.getHours() > slot.hour || (now.getHours() === slot.hour && now.getMinutes() >= slot.minute)) {
      return { available: false, label: `${slot.label} — Passed`, reason: 'passed' };
    }
  }

  return { available: true, label: slot.label };
};

// Compute earliest available day
const getEarliestAvailableDate = () => {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayOfWeek = today.getDay();
  let lastSlotHour = 19;
  if (dayOfWeek === 6) lastSlotHour = 18;
  if (dayOfWeek === 0) lastSlotHour = 16;

  // If past closing time today, earliest date is tomorrow
  if (now.getHours() > lastSlotHour || (now.getHours() === lastSlotHour && now.getMinutes() > 15)) {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const y = tomorrow.getFullYear();
    const m = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const d = String(tomorrow.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export default function BookingForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const initialDate = getEarliestAvailableDate();
  const firstSlot = TIME_SLOTS.find(s => getSlotStatus(s, initialDate).available)?.label || '10:00 am';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    serviceId: SERVICES[0].id,
    date: initialDate,
    timeWindow: firstSlot,
    notes: ''
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Submission state: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState(null);

  // Sync service from URL if provided
  useEffect(() => {
    if (serviceParam) {
      const match = SERVICES.find(s => s.id.toLowerCase() === serviceParam.toLowerCase());
      if (match) {
        setFormData(prev => ({ ...prev, serviceId: match.id }));
      }
    }
  }, [serviceParam]);

  // When date changes, verify timeWindow is still valid and available
  useEffect(() => {
    if (!formData.date) return;

    const currentSlotObj = TIME_SLOTS.find(s => s.label === formData.timeWindow);
    const currentStatus = getSlotStatus(currentSlotObj, formData.date);

    if (!currentStatus.available) {
      const firstAvailable = TIME_SLOTS.find(s => getSlotStatus(s, formData.date).available);
      if (firstAvailable) {
        setFormData(prev => ({ ...prev, timeWindow: firstAvailable.label }));
      }
    }
  }, [formData.date, formData.timeWindow]);

  // Real-time validation helper
  const validate = (data) => {
    const errs = {};
    if (!data.name || data.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!data.date) {
      errs.date = 'Please select a date.';
    } else {
      const [y, m, d] = data.date.split('-').map(Number);
      const selected = new Date(y, m - 1, d);
      selected.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.date = 'Date cannot be in the past.';
      }
    }

    if (!data.timeWindow) {
      errs.timeWindow = 'Please select a time slot.';
    } else if (data.date) {
      const slotObj = TIME_SLOTS.find(s => s.label === data.timeWindow);
      if (slotObj) {
        const slotStatus = getSlotStatus(slotObj, data.date);
        if (!slotStatus.available) {
          errs.timeWindow = `Time slot is ${slotStatus.reason === 'passed' ? 'in the past' : 'outside opening hours'}.`;
        }
      }
    }

    if (!data.serviceId) {
      errs.serviceId = 'Please select a service.';
    }

    return errs;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      date: true,
      timeWindow: true,
      serviceId: true
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      setErrorMessage('Please complete the highlighted required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          telephone: formData.telephone,
          service: `${selectedService.name} (${selectedService.price} · ${selectedService.time})`,
          date: formData.date,
          timeWindow: formData.timeWindow,
          notes: formData.notes
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to process booking request.');
      }

      setStatus('success');
      setSuccessData({
        reference: data.reference,
        booking: data.booking,
        service: selectedService
      });
    } catch (err) {
      console.error('Booking submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Network error occurred. Please try again or call 020 7637 9288.');
    }
  };

  const handleReset = () => {
    const freshDate = getEarliestAvailableDate();
    const freshSlot = TIME_SLOTS.find(s => getSlotStatus(s, freshDate).available)?.label || '10:00 am';

    setFormData({
      name: '',
      email: '',
      telephone: '',
      serviceId: SERVICES[0].id,
      date: freshDate,
      timeWindow: freshSlot,
      notes: ''
    });
    setErrors({});
    setTouched({});
    setStatus('idle');
    setSuccessData(null);
  };

  const todayString = new Date().toISOString().split('T')[0];

  // ================= SUCCESS VIEW =================
  if (status === 'success' && successData) {
    return (
      <div className="bg-[#0d0d0d] p-8 sm:p-12 md:p-14 rounded-3xl sm:rounded-[36px] border border-emerald-500/40 shadow-2xl text-left space-y-8 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <FaCheckCircle size={24} />
            </div>
            <div>
              <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-emerald-400 block font-semibold">
                Reservation Confirmed
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Your Chair is Requested
              </h2>
            </div>
          </div>

          <div className="font-poppins text-left sm:text-right bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-white/10 sm:border-0">
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-medium">Reference ID</span>
            <span className="text-emerald-400 font-bold text-lg tracking-wider">{successData.reference}</span>
          </div>
        </div>

        {/* Appointment Recap Card */}
        <div className="bg-black/60 rounded-2xl p-6 border border-white/10 space-y-4">
          <span className="font-poppins text-[11px] uppercase tracking-wider text-neutral-400 block pb-2 border-b border-white/10 font-semibold">
            Booking Details
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
            <div>
              <span className="text-[11px] font-poppins text-neutral-400 uppercase tracking-wider block font-medium">Guest Name</span>
              <p className="text-white font-medium">{successData.booking.name}</p>
            </div>
            <div>
              <span className="text-[11px] font-poppins text-neutral-400 uppercase tracking-wider block font-medium">Contact Email</span>
              <p className="text-white font-medium break-all">{successData.booking.email}</p>
            </div>
            <div>
              <span className="text-[11px] font-poppins text-neutral-400 uppercase tracking-wider block font-medium">Selected Service</span>
              <p className="text-emerald-400 font-medium">
                {successData.service.name} — {successData.service.price} ({successData.service.time})
              </p>
            </div>
            <div>
              <span className="text-[11px] font-poppins text-neutral-400 uppercase tracking-wider block font-medium">Requested Date & Time</span>
              <p className="text-white font-medium">
                {successData.booking.date} · {successData.booking.timeWindow}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            A confirmation record has been generated. Our team at 33 Newman Street will review and email your confirmation details.
          </p>
          <p className="font-poppins text-xs text-neutral-400">
            Questions or urgent adjustments? Call us: <a href="tel:02076379288" className="text-emerald-400 hover:underline">020 7637 9288</a>.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center bg-emerald-500 text-black px-8 py-3.5 rounded-full font-btn font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all hover:scale-105"
          >
            Book Another Appointment
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3.5 rounded-full font-btn text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // ================= CLEAN FORM VIEW =================
  return (
    <div className="bg-[#0d0d0d] p-7 sm:p-10 md:p-12 rounded-3xl sm:rounded-[36px] border border-white/10 shadow-2xl space-y-7">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight">
            Book an Appointment
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1">
            33 Newman Street, Fitzrovia W1 · Instant confirmation by email
          </p>
        </div>
        <span className="inline-flex items-center gap-2 font-poppins text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 self-start sm:self-auto font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Daily Chairs Open
        </span>
      </div>

      {/* Error notification */}
      {status === 'error' && errorMessage && (
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-3 font-poppins">
          <FaExclamationCircle className="shrink-0 text-red-400" size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="booking-name" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Full Name <span className="text-emerald-400">*</span>
              </label>
              {touched.name && errors.name && (
                <span className="text-[10px] text-red-400 font-poppins">{errors.name}</span>
              )}
            </div>
            <input 
              id="booking-name"
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              required
              className={`w-full bg-black/60 border p-4 text-white text-sm focus:outline-none transition-colors rounded-2xl font-sans placeholder:text-neutral-600 ${
                touched.name && errors.name 
                  ? 'border-red-500 focus:border-red-400' 
                  : 'border-white/15 focus:border-emerald-500'
              }`}
              placeholder="Your full name" 
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="booking-email" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Email Address <span className="text-emerald-400">*</span>
              </label>
              {touched.email && errors.email && (
                <span className="text-[10px] text-red-400 font-poppins">{errors.email}</span>
              )}
            </div>
            <input 
              id="booking-email"
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              required
              className={`w-full bg-black/60 border p-4 text-white text-sm focus:outline-none transition-colors rounded-2xl font-sans placeholder:text-neutral-600 ${
                touched.email && errors.email 
                  ? 'border-red-500 focus:border-red-400' 
                  : 'border-white/15 focus:border-emerald-500'
              }`}
              placeholder="name@example.com" 
            />
          </div>

        </div>
        
        {/* Row 2: Telephone & Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          <div className="space-y-2">
            <label htmlFor="booking-phone" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
              Telephone / Mobile
            </label>
            <input 
              id="booking-phone"
              name="telephone"
              type="tel" 
              value={formData.telephone}
              onChange={handleChange}
              className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans placeholder:text-neutral-600" 
              placeholder="e.g. 07123 456789" 
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="booking-service" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Service <span className="text-emerald-400">*</span>
              </label>
            </div>
            <select 
              id="booking-service"
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              required
              className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans cursor-pointer"
            >
              {SERVICES.map((srv) => (
                <option key={srv.id} value={srv.id} className="bg-[#111] text-white py-2 font-sans">
                  {srv.name} — {srv.price} ({srv.time})
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Row 3: Preferred Date (Custom Themed Calendar) & Preferred Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
          
          {/* Custom Themed Calendar Date Selector */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="booking-date" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Preferred Date <span className="text-emerald-400">*</span>
              </label>
              {touched.date && errors.date && (
                <span className="text-[10px] text-red-400 font-poppins">{errors.date}</span>
              )}
            </div>

            <CalendarPicker 
              id="booking-date"
              selectedDate={formData.date}
              onDateChange={(newDate) => {
                const updated = { ...formData, date: newDate };
                setFormData(updated);
                setTouched(prev => ({ ...prev, date: true }));
                setErrors(validate(updated));
              }}
              hasError={Boolean(touched.date && errors.date)}
            />
          </div>

          {/* Smart Time Slot Selector with Past Time Filtering */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="booking-time" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Preferred Time Slot <span className="text-emerald-400">*</span>
              </label>
              {touched.timeWindow && errors.timeWindow && (
                <span className="text-[10px] text-red-400 font-poppins">{errors.timeWindow}</span>
              )}
            </div>

            <select 
              id="booking-time"
              name="timeWindow"
              value={formData.timeWindow}
              onChange={handleChange}
              onBlur={() => handleBlur('timeWindow')}
              className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans cursor-pointer"
            >
              {TIME_SLOTS.map((slot) => {
                const { available, label } = getSlotStatus(slot, formData.date);
                return (
                  <option 
                    key={slot.id} 
                    value={slot.label} 
                    disabled={!available}
                    className={`py-2 font-sans ${
                      available 
                        ? 'bg-[#111] text-white' 
                        : 'bg-[#1a1a1a] text-neutral-500'
                    }`}
                  >
                    {label}
                  </option>
                );
              })}
            </select>
          </div>

        </div>

        {/* Row 4: Notes / Barber Preference */}
        <div className="space-y-2">
          <label htmlFor="booking-notes" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
            Special Requests or Barber Preference (Optional)
          </label>
          <textarea 
            id="booking-notes"
            name="notes"
            rows={2} 
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans resize-none placeholder:text-neutral-600" 
            placeholder="e.g. Talib M requested, scissor-only cut, beard shaping details..."
          ></textarea>
        </div>

        {/* Action Bar */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="flex items-center gap-2 font-poppins text-xs text-neutral-400 font-medium">
            <FaClock size={11} className="text-emerald-400" />
            <span>Instant Confirmation · No Prepayment Required</span>
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 text-black px-10 sm:px-12 py-4 rounded-full font-btn font-bold text-xs uppercase tracking-wider transition-all ${
              status === 'submitting' 
                ? 'opacity-75 cursor-not-allowed' 
                : 'hover:bg-emerald-400 hover:scale-[1.02] active:scale-95'
            }`}
          >
            {status === 'submitting' ? (
              <>
                <FaSpinner className="animate-spin" size={13} />
                <span>Securing Your Chair...</span>
              </>
            ) : (
              <span>Confirm Booking</span>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
