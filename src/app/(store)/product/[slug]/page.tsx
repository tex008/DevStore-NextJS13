import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden ">
        <Image
          width={1000}
          height={1000}
          quality={100}
          src="/moletom-never-stop-learning.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom neve stop learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Descrição do produto vem aqui
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-2 py-2.5 font-semibold">
            129
          </span>
          <span className="text-sm text-zinc-400">
            Em 36 vezes no carnê casas Bahia
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              PP
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>

          <button
            type="button"
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white
              px-4"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
