import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    baseUrl = `https://api.opendota.com/api/heroStats`;

    constructor(private http: HttpClient){

    }

    getHeroes(){
        
        return this.http.get(`${this.baseUrl}`);
        }

    getHero(name: string){
        return this.http.get(`${this.baseUrl}/pokemon/${name}`);
    }
    
    getPokemons(idxstart=0){
        if(idxstart){
        return this.http.get(`${this.baseUrl}/pokemon?offset=${idxstart}`);
        } else {
            return this.http.get(`${this.baseUrl}/pokemon`);
        }
    }

    getPokemon(name: string){
        return this.http.get(`${this.baseUrl}/pokemon/${name}`);
    }
}
