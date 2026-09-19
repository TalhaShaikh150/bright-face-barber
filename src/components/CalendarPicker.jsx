"use client";
import { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';

/**
 * Custom luxury theme Calendar Picker
 * - Matches obsidian (#0d0d0d) and emerald theme
 * - Disables all past dates (user cannot click or select past dates)
 * - Highlights today and selected date
 * - European/UK Monday-to-Sunday layout
 */
export default function CalendarPicker({
  selectedDate,
  onDateChange,
  hasError = false,
  id = "booking-date",
  minDate
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Initial month view: based on selectedDate or today
  const initialDate = selectedDate ? new Date(selectedDate) : today;
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth()); // 0-indexed

  // Close calendar popover on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keep view in sync if selectedDate changes externally
  useEffect(() => {
    if (selectedDate) {
      const d = new Date(selectedDate);
      if (!isNaN(d.getTime())) {
        setViewYear(d.getFullYear());
        setViewMonth(d.getMonth());
      }
    }
  }, [selectedDate]);

  // Month navigation
  const isCurrentMonthView = 
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  const handlePrevMonth = () => {
    if (isCurrentMonthView) return; // Prevent navigating to past months
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    // Limit to 6 months in advance
    const maxMonthsAhead = 6;
    const diffMonths = (viewYear - today.getFullYear()) * 12 + (viewMonth - today.getMonth());
    if (diffMonths >= maxMonthsAhead) return;

    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  // Calendar calculations
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDayHeaders = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  // Monday start offset (Sunday is 0 -> 6, Monday is 1 -> 0, etc.)
  const startDayOffset = (firstDayOfMonth + 6) % 7;

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyPrefixCells = Array.from({ length: startDayOffset }, (_, i) => i);

  // Helper to check if a specific day is passed or closed
  const checkDayPassed = (day) => {
    const cellDate = new Date(viewYear, viewMonth, day);
    cellDate.setHours(0, 0, 0, 0);

    // Any day strictly before today is passed
    if (cellDate < today) return true;

    // If day is today, check if operating hours are over
    if (cellDate.getTime() === today.getTime()) {
      const now = new Date();
      const dayOfWeek = today.getDay();
      let lastSlotHour = 19; // Mon-Fri: last slot 7:00 pm (closes 8pm)
      if (dayOfWeek === 6) lastSlotHour = 18; // Sat: last slot 6:00 pm (closes 7pm)
      if (dayOfWeek === 0) lastSlotHour = 16; // Sun: last slot 4:00 pm (closes 5pm)

      if (now.getHours() > lastSlotHour || (now.getHours() === lastSlotHour && now.getMinutes() > 15)) {
        return true; // All slots for today have concluded
      }
    }

    return false;
  };

  const handleSelectDay = (day) => {
    if (checkDayPassed(day)) return;

    const formattedMonth = String(viewMonth + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const dateString = `${viewYear}-${formattedMonth}-${formattedDay}`;

    onDateChange(dateString);
    setIsOpen(false);
  };

  // Display label for selected date
  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const dt = new Date(y, m - 1, d);
      return dt.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      
      {/* Trigger Field */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`w-full bg-black/60 border p-4 text-white text-sm rounded-2xl font-sans flex items-center justify-between cursor-pointer transition-all ${
          hasError 
            ? 'border-red-500 focus:border-red-400 ring-1 ring-red-500/20' 
            : isOpen 
              ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-black/80' 
              : 'border-white/15 hover:border-white/30 focus:border-emerald-500'
        }`}
      >
        <div className="flex items-center gap-3 truncate">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
            <FaCalendarAlt size={13} />
          </div>
          <span className={`truncate text-sm ${selectedDate ? 'text-white font-medium' : 'text-neutral-500'}`}>
            {selectedDate ? formatDisplayDate(selectedDate) : 'Select preferred date'}
          </span>
        </div>

        <FaChevronDown 
          size={11} 
          className={`text-neutral-400 transition-transform duration-200 shrink-0 ml-2 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} 
        />
      </button>

      {/* Luxury Themed Calendar Popover */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="Appointment calendar selector"
          className="absolute top-full left-0 mt-2 z-50 w-full sm:w-[340px] p-5 rounded-3xl bg-[#0e0e0e] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl animate-fadeIn"
        >
          {/* Header with Month Navigation */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div>
              <h4 className="font-heading text-lg font-medium text-white uppercase tracking-tight">
                {monthNames[viewMonth]} <span className="text-emerald-400">{viewYear}</span>
              </h4>
              <p className="font-poppins text-[10px] uppercase tracking-wider text-neutral-400">
                Central London · Fitzrovia
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isCurrentMonthView}
                title="Previous month"
                aria-label="Previous month"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500/40 hover:bg-white/5 transition-colors disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:bg-transparent"
              >
                <FaChevronLeft size={10} />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                title="Next month"
                aria-label="Next month"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500/40 hover:bg-white/5 transition-colors"
              >
                <FaChevronRight size={10} />
              </button>
            </div>
          </div>

          {/* Weekday Labels (Mo-Su) */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            {weekDayHeaders.map((day) => (
              <span 
                key={day} 
                className="font-poppins text-[11px] uppercase tracking-wider text-neutral-400 font-semibold py-1"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty cells before month starts */}
            {emptyPrefixCells.map((idx) => (
              <span key={`empty-${idx}`} className="h-9 w-full" />
            ))}

            {/* Days in Month */}
            {daysArray.map((day) => {
              // Check if past date or closed for today
              const isPast = checkDayPassed(day);

              // Check if currently selected
              let isSelected = false;
              if (selectedDate) {
                const [sy, sm, sd] = selectedDate.split('-').map(Number);
                isSelected = sy === viewYear && sm === viewMonth + 1 && sd === day;
              }

              // Check if cell is today
              const isToday = 
                viewYear === today.getFullYear() && 
                viewMonth === today.getMonth() && 
                day === today.getDate();

              if (isPast) {
                return (
                  <span
                    key={day}
                    aria-disabled="true"
                    title={isToday ? "Today's operating hours have concluded" : "Past date — unavailable"}
                    className="h-9 w-full rounded-xl flex items-center justify-center font-poppins text-xs text-neutral-600 opacity-30 select-none cursor-not-allowed line-through"
                  >
                    {day}
                  </span>
                );
              }

              if (isSelected) {
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleSelectDay(day)}
                    aria-pressed="true"
                    className="h-9 w-full rounded-xl flex items-center justify-center font-poppins text-xs font-bold bg-emerald-500 text-black shadow-none transition-transform scale-105"
                  >
                    {day}
                  </button>
                );
              }

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={`h-9 w-full rounded-xl flex items-center justify-center font-poppins text-xs transition-colors ${
                    isToday
                      ? 'border border-emerald-400/80 text-emerald-400 font-bold hover:bg-emerald-500/20'
                      : 'text-neutral-200 hover:bg-white/10 hover:text-white font-medium'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Date Footer */}
          <div className="pt-3.5 mt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-poppins">
            <span className="text-neutral-400 flex items-center gap-1.5 font-medium truncate max-w-[200px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 inline-block"></span>
              <span className="truncate">{selectedDate ? formatDisplayDate(selectedDate) : 'No date selected'}</span>
            </span>

            {!checkDayPassed(today.getDate()) ? (
              <button
                type="button"
                onClick={() => {
                  const y = today.getFullYear();
                  const m = String(today.getMonth() + 1).padStart(2, '0');
                  const d = String(today.getDate()).padStart(2, '0');
                  onDateChange(`${y}-${m}-${d}`);
                  setIsOpen(false);
                }}
                className="text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider transition-colors shrink-0"
              >
                Today
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  const tmr = new Date(today);
                  tmr.setDate(tmr.getDate() + 1);
                  const y = tmr.getFullYear();
                  const m = String(tmr.getMonth() + 1).padStart(2, '0');
                  const d = String(tmr.getDate()).padStart(2, '0');
                  onDateChange(`${y}-${m}-${d}`);
                  setIsOpen(false);
                }}
                className="text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider transition-colors shrink-0"
              >
                Tomorrow
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
