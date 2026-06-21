// utils.js

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  
  export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  export function generateId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  
  export function isEmpty(value) {
    return (
      value == null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" && Object.keys(value).length === 0)
    );
  }
  
  export function unique(arr) {
    return [...new Set(arr)];
  }