/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(
  time: Date | string | number,
  cFormat?: string,
): string {
  if (arguments.length === 0) {
    return '';
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date: Date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    // 10位
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(
    /{([ymdhisa])+}/g,
    (result, key: keyof typeof formatObj) => {
      const value = formatObj[key];
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') {
        return ['日', '一', '二', '三', '四', '五', '六'][value];
      }
      return value.toString().padStart(2, '0');
    },
  );
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @param {boolean} zh
 * @param {boolean} complete
 * @returns {string}
 */
export function formatTime(
  time: number,
  option?: string,
  zh: boolean = false,
  complete: boolean = false,
): string | null {
  if (!option && !zh) {
    if (complete) {
      option = '{y}-{m}-{d} {h}:{i}:{s}';
    } else {
      option = '{y}-{m}-{d}';
    }
  }
  if (('' + time).length === 10) {
    time = +time * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  } else if (diff < 3600 * 24 * 3) {
    return '2天前';
  } else if (diff < 3600 * 24 * 4) {
    return '3天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return complete
      ? d.getFullYear() +
          '年' +
          (d.getMonth() + 1) +
          '月' +
          d.getDate() +
          '日' +
          d.getHours() +
          '时' +
          d.getMinutes() +
          '分'
      : d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
  }
}

export function prependZero(n: number) {
  if (n <= 9) {
    return '0' + n;
  } else {
    return n;
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url: string): GlobalObject {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}',
  );
}
