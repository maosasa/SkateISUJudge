document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("spreadsheet");

    // 10x10の表を生成
    const size_i = 9
    const size_j = 5;
    for (let i = 0; i <= size_i; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j <= size_j; j++) {
            const cell = document.createElement(i === size_i || j === size_j ? "th" : "td");

            if (i < size_i && j < size_j) {
                const input = document.createElement("input");
                input.type = "number";
                input.value = 0;
                input.min = 0;
                cell.appendChild(input);
            } else if (i === size_i && j < size_j) {
                cell.textContent = "0"; // 列合計
            } else if (j === size_i && i < size_j) {
                cell.textContent = "0"; // 行合計
            } else {
                cell.textContent = ""; // 空セル
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // 計算ボタンの処理
    document.getElementById("calculate-button").addEventListener("click", () => {
        const rows = table.querySelectorAll("tr");

        // 行の合計を計算
        for (let i = 0; i < size; i++) {
            let rowSum = 0;
            const inputs = rows[i].querySelectorAll("td input");
            inputs.forEach(input => {
                rowSum += parseFloat(input.value) || 0;
            });
            rows[i].lastElementChild.textContent = rowSum;
        }

        // 列の合計を計算
        for (let j = 0; j < size; j++) {
            let colSum = 0;
            for (let i = 0; i < size; i++) {
                const input = rows[i].querySelectorAll("td input")[j];
                colSum += parseFloat(input.value) || 0;
            }
            rows[size].querySelectorAll("th")[j].textContent = colSum;
        }
    });
});
