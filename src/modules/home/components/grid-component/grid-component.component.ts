import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridCategory, GridConfig, GridData } from '../../shared/models/grid-data.models';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})

export class GridComponentComponent implements OnInit {

    @Input() gridCategory: GridCategory = new GridCategory();
    @Input() gridData: GridData[] = [];
    @Input() uploadText:string = 'Upload';
    @Input() gridConfig: GridConfig = new GridConfig();
    @Output() categoryOnClickEmitter = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    public uploadContent(): void {
        alert('Upload content here');
    }

    public categoryOnClick(): void {
        this.categoryOnClickEmitter.emit();
    }

}
