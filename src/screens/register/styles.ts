import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background-color: #ffffff;
        width: 300px;
        padding: 20px 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            font-size: 20px;
            margin-bottom: 8px;
        }

        .input-area {
            width: 250px;
            margin: 10px 0;
            p {
                font-size: 12px;
                border-left: solid 3px #E39B1F;
                padding: 6px;
                margin-bottom: 6px;
            }
            input, select {
                width: 100%;
                padding: 6px 8px;
                font-size: 12px;
                outline: none;
            }
            .checkbox-option {
                display: inline-flex;
                margin-right: 20px;
                input {
                    margin-right: 4px;
                }
                label {
                    font-size: 12px;
                }
            }
        }

        button {
            width: 250px;
            height: 34px;

            font-size: 12px;
            font-weight: 600;
            color: #E39B1F;
            background-color: #222222;
            border: none;
            cursor: pointer;
        }
    }
`;