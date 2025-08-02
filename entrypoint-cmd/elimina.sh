#!/bin/bash

# Preguntar al usuario cuántos minutos atrás desea limpiar
read -p "¿Cuántos minutos atrás quieres eliminar contenedores?: " MINUTOS

# Obtener timestamp del umbral
UMBRAL=$(date -d "-$MINUTOS minutes" +%s)

# Recorrer contenedores con fecha limpia
docker ps -a --format "{{.ID}} {{.CreatedAt}}" | while read ID DATE TIME REST; do
  # Ignorar zona horaria
  CLEANED_DATE="$DATE $TIME"

  # Convertir a timestamp
  TIMESTAMP=$(date -d "$CLEANED_DATE" +%s 2>/dev/null)

  # Validar y eliminar si corresponde
  if [ -n "$TIMESTAMP" ] && [ "$TIMESTAMP" -ge "$UMBRAL" ]; then
    echo "🧹 Eliminando contenedor creado recientemente: $ID"
    docker rm -f "$ID"
  fi
done