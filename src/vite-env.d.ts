/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Set to "1" at build time to use #/page links (for hosts without route rewrites). */
  readonly VITE_HASH_ROUTER?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
