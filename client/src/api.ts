import { OutputParams } from './params';
// const BASE_URL = 'https://lofiserver.jacobzhang.de'
const BASE_URL = 'http://localhost:3002';

export const generate = (): Promise<OutputParams> =>
    fetch(`${BASE_URL}/generate`)
        .then((response) => response.json())
        .then((response) => JSON.parse(response) as OutputParams);

export const decode = (inputList: number[]): Promise<OutputParams> =>
    fetch(`${BASE_URL}/decode?input=${JSON.stringify(inputList)}`)
        .then((response) => response.json())
        .then((response) => JSON.parse(response) as OutputParams);
