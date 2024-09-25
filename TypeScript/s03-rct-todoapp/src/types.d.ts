//! .d.ts uzantısnı typescript global alan olarak görüyor. Ve bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

type AddFn = (text: string) => Promise<void>;
