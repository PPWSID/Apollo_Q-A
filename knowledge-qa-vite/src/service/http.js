import httpRequest from '@/httpsRequest';

const QAservice = {
  getQA(payload) {
    return httpRequest.post('/screen/api/v1/get_screening_claim', payload);
  },

};

export default QAservice;
