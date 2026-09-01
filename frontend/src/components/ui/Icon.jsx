import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faCalendarDays,
  faChartSimple,
  faCode,
  faFile,
  faLink,
  faQrcode,
  faTableColumns,
} from '@fortawesome/free-solid-svg-icons';

const fontAwesomeIcons = {
  layout: faTableColumns,
  link: faLink,
  file: faFile,
  'id-card': faAddressCard,
  calendar: faCalendarDays,
  code: faCode,
  qr: faQrcode,
  chart: faChartSimple,
};

export function Icon({ name, size = 16 }) {
  const fontAwesomeIcon = fontAwesomeIcons[name];

  if (fontAwesomeIcon) {
    return <FontAwesomeIcon icon={fontAwesomeIcon} style={{ width: size, height: size }} aria-hidden="true" />;
  }

  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (name) {
    case 'login':
      return (
        <svg {...props}>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
      );
    case 'user-plus':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.1c0-.87.24-1.46 1.5-1.46h1.8V3.96c-.31-.04-1.37-.13-2.6-.13-2.58 0-4.35 1.58-4.35 4.48V10H7.1v3h2.75v8h3.65Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M12 2a9.9 9.9 0 0 0-8.55 14.9L2 22l5.25-1.38A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.92 12l-.29.5.29.5-.16.06-3.97 1.04-.47-.28A8 8 0 1 1 12 4Zm-3.2 3.4c-.25 0-.65.1-.92.42-.27.31-1.03 1.01-1.03 2.47s1.06 2.86 1.2 3.06c.15.2 2.04 3.28 5.04 4.47 2.5.99 3.01.8 3.55.75.54-.05 1.74-.71 1.98-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.58-.01Z" />
        </svg>
      );
    case 'x':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M18.25 2H21l-6.02 6.88L22.06 22h-5.5l-4.3-5.62L7.35 22H4.6l6.43-7.35L2 2h5.64l3.88 5.12L18.25 2Zm-.97 17.8h1.52L6.86 4.1H5.23l12.05 15.7Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M16.6 2h3.1c.2 1.7 1.2 3.2 2.7 4.1v3.2a8.3 8.3 0 0 1-2.7-.8v6.4a7.1 7.1 0 1 1-6.2-7v3.4a3.7 3.7 0 1 0 2.9 3.6V2h.2Z" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M12 2.2c-3.2 0-5.4 2.3-5.4 5.5v2.1c0 .6-.2 1.2-.7 1.6-.4.4-1 .7-1.7.9-.4.1-.6.4-.5.8.1.6.8.9 1.4 1.1.5.2 1 .3 1.4.4.2.8.7 1.4 1.5 1.8.6.3 1.1.4 1.5.5-.2.4-.6.7-1.1 1-.4.2-1 .4-1.5.5-.3.1-.5.4-.4.7.1.4.6.5 1 .5.7 0 1.4-.1 2.1-.4.6-.2 1.2-.5 1.7-.9.5.6 1.3 1 2.2 1s1.7-.4 2.2-1c.5.4 1.1.7 1.7.9.7.3 1.4.4 2.1.4.4 0 .9-.1 1-.5.1-.3-.1-.6-.4-.7-.5-.1-1.1-.3-1.5-.5-.5-.3-.9-.6-1.1-1 .4-.1.9-.2 1.5-.5.8-.4 1.3-1 1.5-1.8.4-.1.9-.2 1.4-.4.6-.2 1.3-.5 1.4-1.1.1-.4-.1-.7-.5-.8-.7-.2-1.3-.5-1.7-.9-.5-.4-.7-1-.7-1.6V7.7c0-3.2-2.2-5.5-5.4-5.5Z" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.6 0-3.5.4-5l1.2-5.1s-.3-.7-.3-1.7c0-1.6.9-2.8 2-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.6 2 1.7 2 2 0 3.6-2.1 3.6-5.1 0-2.6-1.9-4.4-4.6-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.3 1.9.8 2.4.1.1.1.2.1.4l-.3 1.1c-.1.4-.4.5-.7.3-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.2 6.8-6.2 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.2-.6-2.6-1.3l-.7 2.6c-.3 1.2-1.1 2.7-1.6 3.6.9.3 1.8.4 2.8.4A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M21.7 3.2 18.4 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.8 13.7.9 12.2c-1.1-.3-1.1-1 .2-1.5L20.2 3c.9-.3 1.7.2 1.5.2Z" />
        </svg>
      );
    case 'reddit':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M22 12.4c0-1.2-1-2.1-2.2-2.1-.6 0-1.1.2-1.5.6-1.5-1-3.4-1.7-5.4-1.8l.9-3.5 2.8.6a1.5 1.5 0 1 0 .3-1.4l-3.3-.7c-.4-.1-.8.2-.9.6l-1.1 4.4c-2.1.1-4 .8-5.5 1.8-.4-.4-.9-.6-1.5-.6A2.2 2.2 0 0 0 2.4 13c0 .8.4 1.5 1 1.8v.5c0 3.2 3.8 5.7 8.6 5.7s8.6-2.5 8.6-5.7v-.5c.8-.5 1.4-1.3 1.4-2.4ZM8.2 13.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Zm7.8 4c-1.1 1-2.8 1.5-4 1.5s-2.9-.5-4-1.5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .8.7 2 1.1 3.3 1.1s2.5-.4 3.3-1.1c.2-.2.5-.2.7 0 .2.2.2.5 0 .7Zm-.2-1.2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z" />
        </svg>
      );
    case 'discord':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M19.5 5.2A16.4 16.4 0 0 0 15.7 4l-.5 1.1a14.7 14.7 0 0 0-6.4 0L8.3 4a16.4 16.4 0 0 0-3.8 1.2C2.1 8.5 1.5 11.7 1.8 14.9a15.9 15.9 0 0 0 4.7 2.4l1.1-1.5c-.6-.2-1.1-.5-1.6-.8l.4-.3c3.1 1.4 6.5 1.4 9.5 0l.4.3c-.5.3-1 .6-1.6.8l1.1 1.5a15.9 15.9 0 0 0 4.7-2.4c.4-3.7-.6-6.9-2.9-9.7ZM8.4 13.5c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8S10 10.7 10 11.7s-.7 1.8-1.6 1.8Zm7.2 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z" />
        </svg>
      );
    case 'twitch':
      return (
        <svg {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M3 2h18v12l-5 5h-4l-3 3v-3H3V2Zm2 2v13h5v2l2-2h3l4-4V4H5Zm5 3h2v5h-2V7Zm5 0h2v5h-2V7Z" />
        </svg>
      );
    case 'threads':
      return (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 20.5c-4.7 0-8-3.4-8-8.7 0-5.2 3-8.3 7.8-8.3 4.7 0 7.3 2.7 7.7 6.6" />
          <path d="M12.3 12.2c3.7-1.1 7.5.1 7.5 3.3 0 2.9-2.7 5-6.6 5-3.1 0-5.1-1.5-5.1-3.6 0-2.2 2.1-3.6 5.1-3.6 3.5 0 5.9 1.1 6.8 3.2" />
        </svg>
      );
    case 'google':
      return (
        <svg {...props} viewBox="0 0 24 24" strokeWidth="2.4">
          <path d="M21.8 12.2c0-.7-.06-1.38-.18-2H12v3.8h5.5a4.7 4.7 0 0 1-2.04 3.08v2.55h3.3c1.93-1.78 3.04-4.4 3.04-7.43Z" fill="#4285f4" stroke="none" />
          <path d="M12 22c2.76 0 5.07-.91 6.76-2.47l-3.3-2.55c-.92.62-2.1.99-3.46.99-2.66 0-4.91-1.8-5.72-4.22H2.87v2.63A10.2 10.2 0 0 0 12 22Z" fill="#34a853" stroke="none" />
          <path d="M6.28 13.75A6.13 6.13 0 0 1 5.96 12c0-.61.1-1.2.32-1.75V7.62H2.87A10.02 10.02 0 0 0 1.8 12c0 1.58.38 3.07 1.07 4.38l3.41-2.63Z" fill="#fbbc05" stroke="none" />
          <path d="M12 6.03c1.5 0 2.85.52 3.91 1.54l2.93-2.93C17.06 2.99 14.76 2 12 2a10.2 10.2 0 0 0-9.13 5.62l3.41 2.63C7.09 7.83 9.34 6.03 12 6.03Z" fill="#ea4335" stroke="none" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...props}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...props}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props} viewBox="0 0 512 512" fill="currentColor" stroke="none">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
      );
    case 'star':
      return (
        <svg {...props} viewBox="0 0 576 512" fill="currentColor" stroke="none">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'layout':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
      );
    case 'file':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      );
    case 'id-card':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M6 16c.8-1.3 1.8-2 3-2s2.2.7 3 2M14 10h4M14 14h4" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'link':
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case 'code':
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'qr':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <path d="M14 14h3v3h-3zM20 14h1v7h-7v-1" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...props}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case 'moon':
      return (
        <svg {...props}>
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
        </svg>
      );
    default:
      return null;
  }
}
