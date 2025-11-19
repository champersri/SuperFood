
import React from 'react';

// Define a base props interface for all icons
interface IconProps {
  className?: string;
}

export const IconLeaf: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.05 9 13 17 12V8z" /><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.05 9 13 17 12V8z" /><path d="M17,3c-5.52,0-10,4.48-10,10c0,2.13,0.67,4.09,1.81,5.7L17,3z" /></svg>
);

export const IconBaby: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.5,4C16.57,4,15,5.57,15,7.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5C22,5.57,20.43,4,18.5,4z M5.5,4C3.57,4,2,5.57,2,7.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5C9,5.57,7.43,4,5.5,4z M18.5,13c-1.83,0-3.35,1.4-3.49,3.19C13.52,14.8,11.3,14,9,14c-2.3,0-4.52,0.8-6.01,2.19C2.85,14.4,1.33,13,0,13c0.17,2.23,1.15,4.2,2.75,5.5C4.68,19.95,7.09,21,9.5,21c2.41,0,4.82-1.05,6.75-2.5C18.85,16.2,19.83,14.23,20,12C19.5,12.33,19,12.63,18.5,13z M9.5,16C7.57,16,6,17.57,6,19.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5C13,17.57,11.43,16,9.5,16z"/></svg>
);

export const IconTeen: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);

export const IconAdult: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12,14.5A4.5,4.5 0 0,1 7.5,10A4.5,4.5 0 0,1 12,5.5A4.5,4.5 0 0,1 16.5,10A4.5,4.5 0 0,1 12,14.5M12,7.5A2.5,2.5 0 0,0 9.5,10A2.5,2.5 0 0,0 12,12.5A2.5,2.5 0 0,0 14.5,10A2.5,2.5 0 0,0 12,7.5M12,2C9.24,2 7,4.24 7,7V10C7,11.66 8.34,13 10,13H14C15.66,13 17,11.66 17,10V7C17,4.24 14.76,2 12,2M11,15H13V22H11V15Z"/></svg>
);

export const IconMidlife: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.24 2 7 4.24 7 7v3.5c0 1.93 1.57 3.5 3.5 3.5h.5v-2h-0.5c-0.83 0-1.5-0.67-1.5-1.5V7c0-1.66 1.34-3 3-3s3 1.34 3 3v3.5c0 0.83-0.67 1.5-1.5 1.5h-0.5v2h0.5c1.93 0 3.5-1.57 3.5-3.5V7c0-2.76-2.24-5-5-5zm-1 13h2v7h-2z"/></svg>
);

export const IconSenior: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-14C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
);

export const IconElderly: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M13.5,4.06C13.5,5.77 12.14,7.12 10.44,7.12C8.73,7.12 7.38,5.77 7.38,4.06C7.38,2.36 8.73,1 10.44,1C12.14,1 13.5,2.36 13.5,4.06M6.5,8.06L6.5,23H8.5V17H12.5V23H14.5V13.38C15.7,14.43 17.25,15.06 19,15.06V13.06C17.25,13.06 15.75,12.18 14.5,11.06C14.13,10.68 13.75,10.38 13.38,10.06L14,9.44L12.56,8L11.5,8.81L9.63,7.5C8.5,8.25 7.5,8.06 6.5,8.06Z"/></svg>
);

export const IconSun: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.03-3.58 2.37-6.58 5.61-7.5L8.7 3.3C4.81 4.54 2 8.42 2 13zm18 0h2c0-4.58-2.81-8.46-6.7-9.7l-.91 2.2C17.63 6.42 20 9.42 20 13zM12 5V3c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5zm0 16v-2c2.76 0 5-2.24 5-5h2c0 3.86-3.14 7-7 7zM7.5 18.19l-1.42 1.42C4.13 17.65 3 15.43 3 13H5c0 1.65 1.05 3.1 2.5 3.89zM18.19 7.5l-1.42-1.42C14.82 4.13 12.6 3 10 3v2c1.65 0 3.1 1.05 3.89 2.5z"/></svg>
);

export const IconPlate: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zM13 15v1c0 .55.45 1 1 1h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-1.5c-1.1 0-2-.9-2-2v-1c0-.49-.35-.91-.83-1H9v-2h2.17c1.3 0 2.45-1.01 2.62-2.31C13.92 9.22 14 8.87 14 8.5c0-1.93-1.57-3.5-3.5-3.5S7 6.57 7 8.5H5c0-2.73 2.11-4.94 4.79-5.41.97 1.34 2.4 2.29 4.04 2.76C13.84 6.78 13.5 7.61 13.5 8.5c0 .39.08.75.21 1.1L11 12v2h2v1zm7-1.07c-.49 3.95-3.85 7-7.93 7h-.14c1.65-.94 2.87-2.67 3.23-4.59.27-1.43 1.09-2.65 2.25-3.41.33.51.59 1.07.79 1.66z"/></svg>
);

export const IconSnack: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M15 5H9v2h6V5zm-1.83 5.42c.31-.54.21-1.25-.26-1.65l-2.43-2.1L9 8.35l2.43 2.1c.47.4.57 1.11.26 1.65l-2.94 5.1C8.36 18.15 9.1 19 10.12 19h3.76c1.02 0 1.76-.85 1.39-1.8l-2.94-5.1zM11 2h2v3h-2V2zm0 17h2v3h-2v-3zM4.93 4.93l1.41-1.41L7.75 5.06l-1.41 1.41L4.93 4.93zm12.72 12.72l1.41-1.41L20.47 17.7l-1.41 1.41-1.41-1.41zM2 11h3v2H2v-2zm17 0h3v2h-3v-2zM6.34 19.07l-1.41-1.41L6.34 16.25l1.41 1.41-1.41 1.41zM17.7 7.75l-1.41-1.41L17.7 4.93l1.41 1.41-1.41 1.41z"/></svg>
);

export const IconMoon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.34 2.02c-5.74.83-10.03 5.73-9.59 11.45 0.35 4.54 3.73 8.28 8.16 8.52 6.04.34 10.99-4.32 10.99-10.32 0-3.35-1.61-6.36-4.14-8.25-2.03-1.52-4.48-2.22-6.42-1.4z"/></svg>
);

export const IconDumbbell: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 15.57 17 12 13.43 8.43 17 7 15.57 10.57 12 7 8.43 8.43 7 12 10.57 15.57 7 17 8.43 13.43 12l3.57 3.57.82-.82c.45-.45 1.18-.45 1.64 0l.96.96c.45.45.45 1.18 0 1.64l-.82.82zM4.14 4.14L2.57 5.57 6.14 9.14 5.57 9.7l-1.43-1.43L2 10.43 4.14 12.57l2.14-2.14L4.14 8.29l3-3L8.57 4.14 7.14 2.7l-3 1.44z"/></svg>
);

export const IconPlusCircle: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
);

export const IconMeat: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M15 5c-2.39 0-4.48 1.48-5.46 3.61C8.74 8.24 8 7.39 8 6.5 8 5.12 9.12 4 10.5 4c.74 0 1.38.31 1.85.81C13.2 4.31 14.06 4 15 4c2.21 0 4 1.79 4 4 0 .99-.38 1.89-1 2.62V13h-2v-2.09c-.33.05-.66.09-1 .09-.72 0-1.39-.14-2-.38V18c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1-.9-2-2-2H5v-2h1c.55 0 1-.45 1-1V8.5c0-.65.3-1.22.79-1.62C8.21 6.4 8.58 6 9 6c.55 0 1 .45 1 1v1.5c0 .41.25.78.63.93 1.03.42 2.19.64 3.37.64 1.25 0 2.44-.24 3.54-.68C18.25 9.04 18.73 8.32 18.9 7.5 18.6 5.96 16.96 5 15 5zm-3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
);

export const IconShoppingCart: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.67-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45z"/></svg>
);

export const IconX: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
);

export const IconCheckCircle: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
);

export const IconJuice: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21,3H3v2l2,14h14l2-14V3z M12,19c-1.66,0-3-1.34-3-3h6C15,17.66,13.66,19,12,19z M19,14H5V6h14V14z"/></svg>
);
