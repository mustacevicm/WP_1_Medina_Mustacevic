import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  kupiProizvod(naziv: string) {
    alert('Proizvod "' + naziv + '" je dodan u korpu!');
  }
  products: Product[] = [
    new Product('Protein Brownie', 'Sočan čokoladni kolač bez brašna.', '/products/protein-brownie.jpg', 4.50),
    new Product('Keto Cheesecake', 'Cheesecake sa stevijom.', 'https://placehold.co/300x300/FBC02D/FFF?text=Cheesecake', 5.00),
    new Product('Raw Kuglice', 'Kuglice od datula i oraha.', 'https://placehold.co/300x300/795548/FFF?text=Kuglice', 3.00),
    new Product('Chia Puding', 'Puding sa bademovim mlijekom.', 'https://placehold.co/300x300/E91E63/FFF?text=Chia', 3.50),
    new Product('Zobeni Keks', 'Hrskavi keks od meda.', 'https://placehold.co/300x300/FF9800/FFF?text=Keks', 2.00),
    new Product('Vegan Mousse', 'Mousse od avokada i kakaa.', 'https://placehold.co/300x300/3E2723/FFF?text=Mousse', 4.00),
    new Product('Protein Bar', 'Domaća pločica sa kikirikijem.', 'https://placehold.co/300x300/8D6E63/FFF?text=Bar', 2.50),
    new Product('Voćna Salata', 'Svježe sezonsko voće.', 'https://placehold.co/300x300/8BC34A/FFF?text=Voce', 3.00),
    new Product('Smoothie Bowl', 'Gusti smoothie sa granolom.', 'https://placehold.co/300x300/9C27B0/FFF?text=Smoothie', 6.00),
    new Product('Rižin Muffin', 'Muffin od rižinog brašna.', 'https://placehold.co/300x300/3F51B5/FFF?text=Muffin', 2.50),
    new Product('Palačinke', 'Palačinke od pira bez šećera.', 'https://placehold.co/300x300/FF5722/FFF?text=Palacinke', 4.50),
    new Product('Sladoled', 'Nice-cream od banana.', 'https://placehold.co/300x300/FFEB3B/000?text=Sladoled', 3.50),
    new Product('Tamna Čokolada', 'Čokolada 80% kakao.', 'https://placehold.co/300x300/212121/FFF?text=Cokolada', 5.50),
    new Product('Tiramisu Fit', 'Sa posnim sirom.', 'https://placehold.co/300x300/795548/FFF?text=Tiramisu', 5.00),
    new Product('Badem Keksići', 'Bez brašna.', 'https://placehold.co/300x300/FFCC80/000?text=Badem', 3.00),
    new Product('Energy Bar', 'Suhe šljive i sjemenke.', 'https://placehold.co/300x300/6D4C41/FFF?text=Energy', 2.00),
    new Product('Kokos Kocke', 'Kokos i tamna čokolada.', 'https://placehold.co/300x300/FFF9C4/000?text=Kokos', 2.50),
    new Product('Jogurt Parfe', 'Grčki jogurt sa medom.', 'https://placehold.co/300x300/F5F5F5/000?text=Jogurt', 3.00),
    new Product('Pečena Jabuka', 'Sa cimetom i orasima.', 'https://placehold.co/300x300/C62828/FFF?text=Jabuka', 2.50),
    new Product('Proteinski Shake', 'Vanilija i bobičasto voće.', 'https://placehold.co/300x300/E040FB/FFF?text=Shake', 4.00)
  ];
}

