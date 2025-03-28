
        function updateTotal() {
            let subtotal = 0;
            document.querySelectorAll(".cart-box").forEach(box => {
                let price = parseInt(box.getAttribute("data-price"));
                let qty = parseInt(box.querySelector(".qty").value);
                let total = price * qty;
                box.querySelector(".total").textContent = total;
                subtotal += total;
            });
            document.getElementById("subtotal").textContent = subtotal;
        }

        document.querySelectorAll(".increase").forEach(button => {
            button.addEventListener("click", function () {
                let input = this.previousElementSibling;
                input.value = parseInt(input.value) + 1;
                updateTotal();
            });
        });

        document.querySelectorAll(".decrease").forEach(button => {
            button.addEventListener("click", function () {
                let input = this.nextElementSibling;
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1;
                    updateTotal();
                }
            });
        });

