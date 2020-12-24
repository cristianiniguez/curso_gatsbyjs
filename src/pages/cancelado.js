import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelado() {
  return (
    <div>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>No te preocupes, siempre puedes volver</p>
        <p>¡Te esperamos de vuelta, no pares de aprender!</p>
        <span role="img" aria-label="emoji">
          😀
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
