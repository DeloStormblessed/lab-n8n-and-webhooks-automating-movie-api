Pregunta 1: ¿Por qué usamos timingSafeEqual en lugar de ===?
Con === el sistema deja de comparar al encontrar la primera diferencia, permitiendo a un atacante medir los tiempos de respuesta para descifrar la firma. timingSafeEqual tarda lo mismo independientemente de las coincidencias, eliminando esta vulnerabilidad.

Pregunta 2: ¿Qué ocurre si n8n envía el mismo evento 3 veces?
La primera petición se procesa y registra el event_id en la base de datos. En el segundo y tercer intento, el código busca ese event_id, detecta que ya existe y detiene la ejecución. La película no se duplica.

Pregunta 3: ¿Qué ventaja tiene usar una transacción?
Garantiza que las operaciones se ejecuten en bloque. Sin transacción, si el evento se guarda pero la película falla, el evento queda registrado. Al reintentar n8n, el sistema lo rechazaría por idempotencia y la película se perdería. El ROLLBACK evita esto deshaciendo todo si hay un fallo.