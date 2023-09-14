export const isDev = process.env.NODE_ENV === 'development';

export const isStage = window.location.pathname.includes('staging.uspacy.tech');
