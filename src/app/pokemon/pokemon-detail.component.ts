import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "./pokemon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./pokemon-detail.component.html"
})
export class PokemonDetailComponent implements OnInit {
    name;
    id;
    pokemon;
    heroes;
    constructor(private route: ActivatedRoute, private ps: PokemonService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.name;
        this.ps.getHeroes().subscribe(
            response => {
                this.heroes = response[this.id-1];
            }
        )
    }
}
