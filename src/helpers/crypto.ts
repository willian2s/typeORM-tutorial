import config from 'config';
import { EncryptionTransformer } from 'typeorm-encrypted';

const Crypto = new EncryptionTransformer({
  key: config.get('App.encrypt.key'),
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: config.get('App.encrypt.iv'),
});

export default Crypto;
