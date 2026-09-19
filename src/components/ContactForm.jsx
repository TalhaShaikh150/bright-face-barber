"use client";
import { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaSpinner, FaClock } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'appointment',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (data) => {
    const errs = {};
    if (!data.name || data.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!data.message || data.message.trim().length < 5) {
      errs.message = 'Please enter a message of at least 5 characters.';
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
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      setErrorMessage('Please complete all required fields correctly.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected network error occurred. Please try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: 'appointment',
      message: ''
    });
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  // Success view
  if (status === 'success') {
    return (
      <div className="h-full p-7 sm:p-9 md:p-10 rounded-3xl sm:rounded-[36px] bg-[#0d0d0d] border border-emerald-500/40 shadow-2xl flex flex-col justify-between space-y-6 animate-fadeIn">
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <FaCheckCircle size={22} />
            </div>
            <div>
              <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-emerald-400 block font-semibold">
                Message Sent
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Message Received
              </h3>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message has been received by our team at 33 Newman Street.
          </p>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-poppins text-xs text-neutral-400 space-y-1">
            <p>Recipient: Bright Face Barber Desk</p>
            <p>Expected Response: Within 2–4 hours during operating hours</p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center bg-emerald-500 text-black px-8 py-3.5 rounded-full font-btn font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all hover:scale-105"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // Clean Form view
  return (
    <div className="h-full p-7 sm:p-9 md:p-10 rounded-3xl sm:rounded-[36px] bg-[#0d0d0d] border border-white/10 shadow-2xl flex flex-col justify-between space-y-7">
      
      <div>
        <div className="border-b border-white/10 pb-5 mb-7">
          <h2 className="text-2xl sm:text-3xl font-heading text-white uppercase tracking-tight">
            Send a Message
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1">
            Our team typically replies within 2–4 hours during operating hours.
          </p>
        </div>

        {status === 'error' && errorMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-3 font-poppins">
            <FaExclamationCircle className="shrink-0 text-red-400" size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="contact-name" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                {touched.name && errors.name && (
                  <span className="text-[10px] text-red-400 font-poppins">{errors.name}</span>
                )}
              </div>
              <input 
                id="contact-name"
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
                placeholder="e.g. Thomas Kelly" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="contact-email" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                {touched.email && errors.email && (
                  <span className="text-[10px] text-red-400 font-poppins">{errors.email}</span>
                )}
              </div>
              <input 
                id="contact-email"
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
                placeholder="e.g. thomas@domain.co.uk" 
              />
            </div>
          </div>

          {/* Row 2: Telephone & Reason */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="contact-phone" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Telephone / Mobile <span className="text-neutral-500 font-normal lowercase">(optional)</span>
              </label>
              <input 
                id="contact-phone"
                name="phone"
                type="tel" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans placeholder:text-neutral-600" 
                placeholder="e.g. 07123 456789" 
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-reason" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Reason for Contact
              </label>
              <select 
                id="contact-reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-black/60 border border-white/15 p-4 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors rounded-2xl font-sans cursor-pointer"
              >
                <option value="appointment">Appointment Enquiry</option>
                <option value="wedding">Wedding / Group Booking</option>
                <option value="cancellation">Rescheduling or Cancellation</option>
                <option value="general">General Question</option>
              </select>
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="contact-message" className="text-[11px] font-poppins uppercase tracking-wider text-neutral-300 font-medium block">
                Your Message <span className="text-emerald-400">*</span>
              </label>
              {touched.message && errors.message && (
                <span className="text-[10px] text-red-400 font-poppins">{errors.message}</span>
              )}
            </div>
            <textarea 
              id="contact-message"
              name="message"
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              required
              className={`w-full bg-black/60 border p-4 text-white text-sm focus:outline-none transition-colors rounded-2xl font-sans resize-none placeholder:text-neutral-600 ${
                touched.message && errors.message 
                  ? 'border-red-500 focus:border-red-400' 
                  : 'border-white/15 focus:border-emerald-500'
              }`} 
              placeholder="How can our barbers help you?"
            ></textarea>
          </div>

          {/* Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-2 font-poppins text-xs text-neutral-400 font-medium">
              <FaClock size={11} className="text-emerald-400" />
              <span>Replies within 2–4 hours during opening times</span>
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
                  <span>Sending Message...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
