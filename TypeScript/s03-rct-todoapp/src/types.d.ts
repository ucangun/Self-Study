//! .d.ts uzantısnı typescript global alan olarak görüyor. Ve bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

//* typescript js supersetidir. yani browserlar tarafından işlenemez o nedenle compile a ihtiyacı vardır. Ts ile yazılan kodlar js e dönüştürülür. Js e dönüştürülürken typescripte özgü yapılar js kodunda karşılığı olmadığı için dönüştürülmezler ve böylelikle production ortamında bir yük oluşturmazlar.

type AddFn = (text: string) => Promise<void>;
type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
}

interface ITodoListFn {
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}
