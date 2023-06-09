import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  route = inject(ActivatedRoute);
  type: string | null = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // console.log(params.get('type'));
      this.type = params.get('type') || '';
    })
  }
}
