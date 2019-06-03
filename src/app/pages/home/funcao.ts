import { async } from 'q';

const formatResponse = async (_prResponse: any) => {

    if (_prResponse.indexOf('[{') === -1 && (_prResponse.indexOf('[]') === 0)) return [];

    var inicioData = _prResponse.indexOf('[{');
    var finalData = _prResponse.length;
    console.log('Olar ', inicioData, finalData);

    return inicioData === -1
        ? _prResponse.substring(inicioData, finalData)
        : eval(_prResponse.substring(inicioData, finalData));
}

export { formatResponse };