document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const rowsCount = parseInt(urlParams.get("rows"), 10) || 10; // デフォルトは10
    const columnsCount = parseInt(urlParams.get("columns"), 10) || 10; // デフォルトは10

    if (rowsCount < 1 || rowsCount > 20 || columnsCount < 1 || columnsCount > 20) {
        alert("行数と列数は1から20の間で指定してください。");
        return;
    }

    const table = document.getElementById("spreadsheet");

    // 表を生成
    for (let i = 0; i <= rowsCount; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j <= columnsCount; j++) {
            const cell = document.createElement(i === rowsCount || j === columnsCount ? "th" : "td");

            if (i < rowsCount && j < columnsCount) {
                const input = document.createElement("input");
                input.type = "number";
                input.value = 0;
                input.min = 0;
                cell.appendChild(input);
            } else if (i === rowsCount && j < columnsCount) {
                cell.textContent = "0"; // 列合計
            } else if (j === columnsCount && i < rowsCount) {
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
        for (let i = 0; i < rowsCount; i++) {
            let rowSum = 0;
            const inputs = rows[i].querySelectorAll("td input");
            inputs.forEach(input => {
                rowSum += parseFloat(input.value) || 0;
            });
            rows[i].lastElementChild.textContent = rowSum;
        }

        // 列の合計を計算
        for (let j = 0; j < columnsCount; j++) {
            let colSum = 0;
            for (let i = 0; i < rowsCount; i++) {
                const input = rows[i].querySelectorAll("td input")[j];
                colSum += parseFloat(input.value) || 0;
            }
            rows[rowsCount].querySelectorAll("th")[j].textContent = colSum;
        }
    });
});
