Document.getElementById("form-asistencia").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const datos = {
                nombre: document.getElementById("nombre").value,
                asistencia: document.getElementById("asistencia").value
            };

            // PEGA AQUÍ LA URL LARGA QUE TE DIO GOOGLE APPS SCRIPT
            const urlScript = "https://script.google.com/macros/s/AKfycbwgG_2uhFJO4nf2xgl2pEu0bnchFJpqDg6MK2Bg-hzmcpfwBfE4oNERdfvj0DcNjvUE/exec";

            fetch(urlScript, {
                method: "POST",
                body: JSON.stringify(datos)
            })
            .then(response => {
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.8 }
                });
                alert("¡Gracias por confirmar! Tus datos se guardaron en la lista 🍻");
                document.getElementById("form-asistencia").reset();
            })
            .catch(error => {
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.8 }
                });
                alert("¡Gracias por confirmar! Nos vemos en el pachangón");
            });
        });