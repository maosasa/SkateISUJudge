// import {masterData} from './data.js';

// ローカル用にベタばり
const masterData = {
    "1Eu": {"type": "jump", "sov": 0.5, "under_or_e": 0.4, "under_and_e": null },
    "1T": {"type": "jump", "sov": 0.4, "under_or_e": 0.32, "under_and_e": null },
    "1S": {"type": "jump", "sov": 0.4, "under_or_e": 0.32, "under_and_e": null },
    "1Lo": {"type": "jump", "sov": 0.5, "under_or_e": 0.4, "under_and_e": null },
    "1F": {"type": "jump", "sov": 0.5, "under_or_e": 0.4, "under_and_e": 0.3 },
    "1Lz": {"type": "jump", "sov": 0.6, "under_or_e": 0.48, "under_and_e": 0.36 },
    "1A": {"type": "jump", "sov": 1.1, "under_or_e": 0.88, "under_and_e": null },
    "2T": {"type": "jump", "sov": 1.3, "under_or_e": 1.04, "under_and_e": null },
    "2S": {"type": "jump", "sov": 1.3, "under_or_e": 1.04, "under_and_e": null },
    "2Lo": {"type": "jump", "sov": 1.7, "under_or_e": 1.36, "under_and_e": null },
    "2F": {"type": "jump", "sov": 1.8, "under_or_e": 1.44, "under_and_e": 1.08 },
    "2Lz": {"type": "jump", "sov": 2.1, "under_or_e": 1.68, "under_and_e": 1.26 },
    "2A": {"type": "jump", "sov": 3.3, "under_or_e": 2.64, "under_and_e": null },
    "3T": {"type": "jump", "sov": 4.2, "under_or_e": 3.36, "under_and_e": null },
    "3S": {"type": "jump", "sov": 4.3, "under_or_e": 3.44, "under_and_e": null },
    "3Lo": {"type": "jump", "sov": 4.9, "under_or_e": 3.92, "under_and_e": null },
    "3F": {"type": "jump", "sov": 5.5, "under_or_e": 4.24, "under_and_e": 3.18 },
    "3Lz": {"type": "jump", "sov": 5.9, "under_or_e": 4.72, "under_and_e": 3.54 },
    "3A": {"type": "jump", "sov": 8.0, "under_or_e": 6.4, "under_and_e": null },
    "4T": {"type": "jump", "sov": 9.5, "under_or_e": 7.6, "under_and_e": null },
    "4S": {"type": "jump", "sov": 9.7, "under_or_e": 7.76, "under_and_e": null },
    "4Lo": {"type": "jump", "sov": 10.5, "under_or_e": 8.4, "under_and_e": null },
    "4F": {"type": "jump", "sov": 11.0, "under_or_e": 8.8, "under_and_e": 6.6 },
    "4Lz": {"type": "jump", "sov": 11.5, "under_or_e": 9.2, "under_and_e": 6.9 },
    "4A": {"type": "jump", "sov": 12.5, "under_or_e": 10.0, "under_and_e": null },
    "USp":{"type": "spin", "lb": 1, "l1": 1.2, "l2": 1.5, "l3": 1.9, "l4": 2.4 },
    "LSp":{"type": "spin", "lb": 1.2, "l1": 1.5, "l2": 1.9, "l3": 2.4, "l4": 2.7 },
    "CSp":{"type": "spin", "lb": 1.1, "l1": 1.4, "l2": 1.8, "l3": 2.3, "l4": 2.6 },
    "SSp":{"type": "spin", "lb": 1.1, "l1": 1.3, "l2": 1.6, "l3": 2.1, "l4": 2.5 },
    "FUSp":{"type": "spin", "lb": 1.5, "l1": 1.7, "l2": 2, "l3": 2.4, "l4": 2.9 },
    "FLSp":{"type": "spin", "lb": 1.7, "l1": 2, "l2": 2.4, "l3": 2.9, "l4": 3.2 },
    "FCSp":{"type": "spin", "lb": 1.6, "l1": 1.9, "l2": 2.3, "l3": 2.8, "l4": 3.2 },
    "FSSp":{"type": "spin", "lb": 1.7, "l1": 2, "l2": 2.3, "l3": 2.6, "l4": 3 },
    "CUSp":{"type": "spin", "lb": 1.5, "l1": 1.7, "l2": 2, "l3": 2.4, "l4": 2.9 },
    "CLSP":{"type": "spin", "lb": 1.7, "l1": 2, "l2": 2.4, "l3": 2.9, "l4": 3.2 },
    "CCSp":{"type": "spin", "lb": 1.7, "l1": 2, "l2": 2.3, "l3": 2.8, "l4": 3.2 },
    "CSSp":{"type": "spin", "lb": 1.6, "l1": 1.9, "l2": 2.3, "l3": 2.6, "l4": 3 },
    "CoSp":{"type": "spin", "lb": 1.5, "l1": 1.7, "l2": 2, "l3": 2.5, "l4": 3 },
    "CCoSp":{"type": "spin", "lb": 1.7, "l1": 2, "l2": 2.5, "l3": 3, "l4": 3.5 },
    "FUSpV":{"type": "spin", "lb": 1.13, "l1": 1.28, "l2": 1.5, "l3": 1.8, "l4": 2.18 },
    "FLSpV":{"type": "spin", "lb": 1.28, "l1": 1.5, "l2": 1.8, "l3": 2.18, "l4": 2.4 },
    "FCSpV":{"type": "spin", "lb": 1.2, "l1": 1.43, "l2": 1.73, "l3": 2.1, "l4": 2.4 },
    "FSSpV":{"type": "spin", "lb": 1.28, "l1": 1.5, "l2": 1.73, "l3": 1.95, "l4": 2.25 },
    "CUSpV":{"type": "spin", "lb": 1.13, "l1": 1.28, "l2": 1.5, "l3": 1.8, "l4": 2.18 },
    "CLSPV":{"type": "spin", "lb": 1.28, "l1": 1.5, "l2": 1.8, "l3": 2.18, "l4": 2.4 },
    "CCSpV":{"type": "spin", "lb": 1.28, "l1": 1.5, "l2": 1.73, "l3": 2.1, "l4": 2.4 },
    "CSSpV":{"type": "spin", "lb": 1.2, "l1": 1.43, "l2": 1.73, "l3": 1.95, "l4": 2.25 },
    "CoSpV":{"type": "spin", "lb": 1.13, "l1": 1.28, "l2": 1.5, "l3": 1.88, "l4": 2.25 },
    "CCoSpV":{"type": "spin", "lb": 1.28, "l1": 1.5, "l2": 1.88, "l3": 2.25, "l4": 2.63 },
    "StSq":{"type": "step", "lb": 1.5, "l1": 1.8, "l2": 2.6, "l3": 3.3, "l4": 3.9 },
    "ChSq":{"type": "choreo", "lb": "-", "l1": 3, "l2": "-", "l3": "-", "l4": "-" }
    };
  

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const elements = decodeURIComponent(urlParams.get("elements") || "").split("\n").filter(Boolean);
    const columnsCount = parseInt(urlParams.get("columns"), 10);

    // 基礎点データ
    // let masterData = { jumps: [], spins: [], steps: [], choreo:[] };
    /*
    // JSONデータをロードする関数
    async function loadMasterData() {
        const baseValueResponse = await fetch("data/base_value.json");
        const baseValueData = baseValueResponse.ok ? await baseValueResponse.json() : null;

        if (baseValueData 
            && baseValueData.jumps 
            && baseValueData.spins 
            && baseValueData.steps
            && baseValueData.choreo
        ){
            masterData.jumps = baseValueData.jumps;
            masterData.spins = baseValueData.spins;
            masterData.steps = baseValueData.steps;
            masterData.choreo = baseValueData.choreo;
        }
    }
    loadMasterData()
    */
    console.log(masterData)

    //alert
    if (elements.length === 0) {
        alert("要素リストが空です。");
        return;
    }    
    if (columnsCount < 1 || columnsCount > 20) {
        alert("列数は1から20の間で指定してください。");
        return;
    }

    const table = document.getElementById("spreadsheet");

    // 表を生成
    //ヘッダー行
    header_cells = document.createElement("tr");
    header_cells.appendChild(document.createElement("th"))
    for(i=0;i<columnsCount;i++){
        header_cell = document.createElement("th")
        header_cell.textContent = "J" + (i+1)
        header_cells.appendChild(header_cell)
    }
    header_cells.appendChild(document.createElement("th"))
    header_goe = document.createElement("th")
    header_goe.textContent = "GOE"
    header_cells.appendChild(header_goe)
    table.appendChild(header_cells)

    // input
    const rows = [];
    elements.forEach((element) => {
        const row = document.createElement("tr");

        // 左側に文字列を表示するセル エレメンツ
        const elementsCell = document.createElement("td");
        elementsCell.textContent = element;
        const rowInElement = document.createElement("tr");
        const threeElements = getEachElementFromText(element);
        for(i=0;i<3;i++){
            const eachElementCell = document.createElement("input");
            eachElementCell.value = threeElements[i]["name"];
            rowInElement.appendChild(eachElementCell)
        }
        elementsCell.appendChild(rowInElement)
        // const input_element = document.createElement("input");
        // input_element.type = "text";
        // input_element.value = element;
        // elementsCell.appendChild(input_element)
        row.appendChild(elementsCell);

        // 指定された列数分の入力フィールドを作成
        const cells = [];
        for (let i = 0; i < columnsCount; i++) {
            const inputCell = document.createElement("td");
            const input = document.createElement("input");
            input.type = "number";
            input.value = 0;
            input.min = -5;
            input.max = 5;
            input.addEventListener("input", updateSums); // 入力が変更されたら合計を更新
            inputCell.appendChild(input);
            cells.push(input);
            row.appendChild(inputCell);
        }

        // // 行ごとの合計セルを追加
        // const rowSumCell = document.createElement("td");
        // rowSumCell.classList.add("row-sum");
        // rowSumCell.textContent = "0";
        // row.appendChild(rowSumCell);

        //GOE列を追加
        const goeCell = document.createElement("td");
        goeCell.classList.add("goe");
        goeCell.textContent = "0.00";
        row.appendChild(goeCell);

        //Judge Average列を追加
        const judgeAvgCell = document.createElement("td");
        judgeAvgCell.classList.add("judge-avg");
        judgeAvgCell.textContent = "0.00";
        row.appendChild(judgeAvgCell);

        //goe base列を追加
        const goeBaseCell = document.createElement("td");
        goeBaseCell.classList.add("goe-base");
        goeBaseCell.textContent = "0.00";
        row.appendChild(goeBaseCell);

        //base value列を追加
        const baseValueCell = document.createElement("td");
        baseValueCell.classList.add("base-value");
        baseValueCell.textContent = "0.00";
        row.appendChild(baseValueCell);

        table.appendChild(row);
        rows.push({ element, cells, goeCell, judgeAvgCell, goeBaseCell, baseValueCell });
        // getGoe();
    });

    // // 列ごとの合計行を追加
    // const sumRow = document.createElement("tr");
    // const emptyCell = document.createElement("td"); // ラベル用空セル
    // emptyCell.textContent = "列合計";
    // sumRow.appendChild(emptyCell);

    // const columnSums = [];
    // for (let i = 0; i < columnsCount; i++) {
    //     const columnSumCell = document.createElement("td");
    //     columnSumCell.classList.add("column-sum");
    //     columnSumCell.textContent = "0";
    //     sumRow.appendChild(columnSumCell);
    //     columnSums.push(columnSumCell);
    // }

    // // 合計行は最後に追加
    // table.appendChild(sumRow);

    // 値を更新
    getGoe();

    function updateSums() {
        // // 各行の合計を更新
        // rows.forEach(({ cells, rowSumCell }) => {
        //     const rowSum = cells.reduce((sum, cell) => sum + (parseFloat(cell.value) || 0), 0);
        //     rowSumCell.textContent = rowSum;
        // });

        // // 各列の合計を更新
        // for (let colIndex = 0; colIndex < columnsCount; colIndex++) {
        //     let columnSum = 0;
        //     rows.forEach(({ cells }) => {
        //         columnSum += parseFloat(cells[colIndex].value) || 0;
        //     });
        //     columnSums[colIndex].textContent = columnSum;
        // }

        //goeを更新
        getGoe();
    }

    function getGoe() {
        // GOEを更新
        // 各列の合計を更新
        getBaseValueForGoe()
        rows.forEach(({ cells, goeCell, judgeAvgCell, goeBaseCell }) => {
            const values = cells.map(cell => parseFloat(cell.value) || 0);
            let judgeAvg = 0
            // 最大値と最小値を除いた平均を計算
            if (values.length > 4) {
                const sorted = values.slice().sort((a, b) => a - b);
                const filteredValues = sorted.slice(1, -1); // 最大値と最小値を除外
                judgeAvg =
                    filteredValues.reduce((sum, value) => sum + value, 0) / filteredValues.length;
                judgeAvgCell.textContent = judgeAvg.toFixed(2); // 小数点以下2桁に固定
            } else {
                judgeAvgCell.textContent = (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2); // 要素が2個以下の場合は表示しない
            }
            let baseValueForGoe = parseFloat(goeBaseCell.textContent)
            let goe = 0
            goe = baseValueForGoe * judgeAvg / 10.0
            goeCell.textContent = goe.toFixed(2)
        })
    }

    function getBaseValueForGoe(){
        rows.forEach(({element, goeBaseCell}) => {
            if(masterData[element]){
                let element_type = masterData[element].type;
                switch(element_type){
                    case "jump":
                        goeBaseCell.textContent = masterData[element].sov;
                        break;
                    case "spin":
                        goeBaseCell.textContent = masterData[element].lb;
                        break;
                    case "step":
                        goeBaseCell.textContent = masterData[element].lb;
                        break;
                    case "choreo":
                        goeBaseCell.textContent = "5";
                    };
            }else{
                goeBaseCell.textContent = "0"
            }
        });
    }

    function getEachElementFromText(text){
        let e = [
            {"name": "", type: "", "rot": null, "edge": null, "v": false, "level": null},
            {"name": "", type: "", "rot": null, "edge": null, "v": false, "level": null},
            {"name": "", type: "", "rot": null, "edge": null, "v": false, "level": null}
        ]
        let elements = text.split("+")
        elements.forEach((element, index)=> {
            if (element.match(/^[0-9]{1}[A-Za-z]{1,2}/)){
                //jump
                e[index]["type"] = "jump";
                e[index]["name"] = element.match(/^[0-9]{1}(T|S|Lo|F|Lz|A)/)[0];
                e[index]["rot"] = element.match(/(<|q)/) ? element.match(/(<|q)/)[0] : null;
                e[index]["edge"] = element.match(/(e|!)/) ? element.match(/(e|!)/)[0] : null;
            }else if(element.match(/Sp/)){
                //spin
                e[index]["name"] = element.match(/[A-Za-z]*Sp/)[0];
                e[index]["type"] = "spin";
                e[index]["v"] = element.match(/V/) ? true : false;
                e[index]["level"] = element.match(/Sp.*/)[0].replace("Sp","");
            }else if(element.match(/StSq/)){
                e[index]["name"] = "StSq";
                e[index]["type"] = "step";
                e[index]["level"] = element.match(/StSq.*/)[0].replace("StSq","");
            }else if(element.match(/ChSq/)){
                e[index]["name"] = "ChSq";
                e[index]["type"] = "choreo";
                e[index]["level"] = "1"; 
            }
            console.log(e[index]);
        })
        return e
    }

    // // 計算ボタンの処理（サンプル: 入力された数字の合計をアラートで表示）
    // document.getElementById("calculate-button").addEventListener("click", () => {
    //     let total = 0;
    //     const inputs = table.querySelectorAll("input");
    //     inputs.forEach(input => {
    //         total += parseFloat(input.value) || 0;
    //     });
    //     alert(`合計: ${total}`);
    // });

    // 戻るボタンの処理
    document.getElementById("back-button").addEventListener("click", () => {
        window.location.href = "index.html"; // 初期ページに戻る
    });
});
