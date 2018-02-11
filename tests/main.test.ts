import * as main from '../lib/main';
import * as crypto from 'crypto';

test('main', () => {
  for (let i = 0; i <= 32; i++) {
    const buf = crypto.randomBytes(i);

    const encoded = main.encode(buf);
    const decoded = main.decode(encoded);

    const base64Encoded = buf.toString('base64');
    expect(base64Encoded).toBe(main._appendPadding(encoded));

    expect(decoded).toEqual(buf);
  }
});
