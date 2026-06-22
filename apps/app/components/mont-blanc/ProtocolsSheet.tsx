'use client'

import type { ProtocolInfo } from '@/lib/mont-blanc/stages'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

// Bouton + bottom sheet listant les protocoles d'une étape.
export function ProtocolsSheet({ protocols }: { protocols: ProtocolInfo[] }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-fumee w-full text-center text-sm transition-colors hover:text-white"
      >
        Voir les {protocols.length} protocoles
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="bg-noir/70 fixed inset-0 z-50 flex items-end justify-center backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="pb-safe border-acier bg-forge w-full max-w-md rounded-t-2xl border-t p-6"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-acier mx-auto mb-5 h-1 w-10 rounded-full" />
              <p className="text-feu text-sm font-medium uppercase tracking-wider">
                Les {protocols.length} protocoles
              </p>
              <ul className="mt-4 flex flex-col gap-4">
                {protocols.map((protocol) => (
                  <li key={protocol.id} className="flex gap-3">
                    <span className="text-xl" aria-hidden>
                      {protocol.icon}
                    </span>
                    <div>
                      <p className="font-sans font-bold text-white">{protocol.name}</p>
                      <p className="text-fumee text-sm">{protocol.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border-acier mt-6 w-full rounded-md border py-3 text-sm text-white"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
