import styled from "styled-components";


export const Container = styled.div`
    table {
        width: 1000px;
        margin: 20px auto;
        font-size: 14px;
        text-align: left;
        border-collapse: collapse;
        thead {
            border-bottom: solid 2px #222222;
        }

        tr > th,
        tr > td {
            padding: 8px;
        }
        //colunas
        tr > th:nth-child(1),
        tr > td:nth-child(1)  {
            width: 42px;
        }
        tr > th:nth-child(2),
        tr > td:nth-child(2)  {
            width: 170px;
        }
        tr > th:nth-child(3),
        tr > td:nth-child(3)  {
            width: 150px;
        }
        tr > th:nth-child(4),
        tr > td:nth-child(4)  {
            width: 164px;
        }
        tr > th:nth-child(5),
        tr > td:nth-child(5)  {
            width: 194px;
        }
        tr > th:nth-child(6),
        tr > td:nth-child(6)  {
            width: 280px;
        }
        //fim_das_colunas

        td > select {
            width: 140px;
            height: 34px;
            font-size: 12px;
            margin-right: 6px;
        }

        td > button {
            width: 100px;
            height: 34px;
            font-size: 14px;
            font-weight: bold;
            border: none;
            background: #222222;
            color: #E39B1F;
        }
    }
`;