export function encode(bytes: Buffer): string {
  if (bytes === undefined) {
    throw new Error('The argument "bytes" cannot be undefined');
  }

  const str = bytes.toString('base64');
  return _trimPadding(str);
}

export function _trimPadding(str: string): string {
  while (str.length && str[str.length - 1] === '=') {
    str = str.slice(0, -1);
  }
  return str;
}

export function decode(str: string): Buffer {
  if (str === undefined) {
    throw new Error('s cannot be undefined');
  }

  return Buffer.from(_appendPadding(str), 'base64');
}

export function _appendPadding(str: string): string {
  str = str || '';
  if (str.length % 4) {
    str += '='.repeat(4 - str.length % 4);
  }
  return str;
}
