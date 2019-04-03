export default class ServiceSearchService {
    static instance = null;

    backend_url = 'http://localhost:8080';
    //backend_url = 'https://cs4500-sp19-noideainc.herokuapp.com';

    static getInstance() {
        if(ServiceSearchService.instance === null) {
            ServiceSearchService.instance = new ServiceSearchService()
        }
        return this.instance
    }

    getResults = (id,criteria,qids) => {
        var criteriastring = ""
        var qidsstring =""
        var i
        for(i =0; i < criteria.length ; i++){
            if(criteria[i] == null){
                continue;
            }
            if (Array.isArray(criteria[i])){
                console.log("got here")
                var j;
                criteriastring = criteriastring + "-r"
                for(j =0;j<criteria[i].length;j++){
                    criteriastring = criteriastring + criteria[i][j] +"_"
                }
                qidsstring = qidsstring + qids[i].id +","

            }
            else {
                criteriastring = criteriastring + criteria[i] + ","
                qidsstring = qidsstring + qids[i].id +","
            }
            console.log(criteria[i])
        }
        return fetch(`${this.backend_url}/api/service-search/${id}/${qidsstring}/${criteriastring}`)
            .then(response => response.json())
    }
}