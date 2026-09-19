"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { FaCheckCircle, FaExclamationCircle, FaSpinner, FaClock } from 'react-icons/fa';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    serviceId: SERVICES[0].id,
    date: '',
    timeWindow: 'morning',
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
      const selected = new Date(data.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.date = 'Date cannot be in the past.';
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
          timeWindow: formData.timeWindow === 'morning' ? 'Morning (10:00 am — 12:30 pm)' :
                      formData.timeWindow === 'afternoon' ? 'Afternoon (12:30 pm — 4:00 pm)' :
                      'Evening (4:00 pm — 8:00 pm)',
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
    setFormData({
      name: '',
      email: '',
      telephone: '',
      serviceId: SERVICES[0].id,
      date: '',
      timeWindow: 'morning',
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

        {/* Row 3: Date & Preferred Session Window */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="booking-date" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Preferred Date <span className="text-emerald-400">*</span>
              </label>
              {touched.date && errors.date && (
                <span className="text-[10px] text-red-400 font-poppins">{errors.date}</span>
              )}
            </div>
            <input 
              id="booking-date"
              name="date"
              type="date" 
              min={todayString}
              value={formData.date}
              onChange={handleChange}
              onBlur={() => handleBlur('date')}
              required
              className={`w-full bg-black/60 border p-4 text-white text-sm focus:outline-none transition-colors rounded-2xl font-sans cursor-pointer ${
                touched.date && errors.date 
                  ? 'border-red-500 focus:border-red-400' 
                  : 'border-white/15 focus:border-emerald-500'
              }`} 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="booking-time" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
              Preferred Time Slot
            </label>
            <select 
              id="booking-time"
              name="timeWindow"
              value={formData.timeWindow}
              onChange={handleChange}
              className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans cursor-pointer"
            >
              <option value="morning">Morning (10:00 am — 12:30 pm)</option>
              <option value="afternoon">Afternoon (12:30 pm — 4:00 pm)</option>
              <option value="evening">Evening (4:00 pm — 8:00 pm)</option>
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
