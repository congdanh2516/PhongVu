import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/components/category/services/category.service';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  bannerSet1 : Array<any> = [
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/KmC5GJuUzn9TKrmbz6iPEHMUIMVzMoeGTMuuwTwB9rKmxIgakwdx2Yac6oayUKfK9hh1ei1W2AL-otHpEECEsJmn2H6jKVmL=rw-w616',
    },
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/IgD0W4-kP5-hb_6wEvZmZZ0F3CRMJRTSglO4ZI5lffFwhlgNu9SvgaRSaEzhdMSnC-ouATqLYYWYTk0gK4hfb7oaMWEhTHI=rw-w616',
    }
  ]

  bannerSet2 : Array<any> = [
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/4n8_Z0fEJl9AK2ZEDK2fjp76yNdALIm2lMbIIfDLcCmZkjqvPMHZxkK9RfvbXb0ofsmhE-EjFrIBrSKbKDuz2anC_wDIjm4=rw-w411',
    },
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/7rrZHO9NcaADyPUpfvqkebpJnKbwEYi4KOeByyn3uJaJNLL3uCAsi4n3X-IbFYfVoTI9Kmtfa0Ma3OM7GhmEhhMrpPrrd-_I=rw-w411',
    },
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/N8kzR2c8ZpLaLAxfghinFCdrGs9UFc6IHhj8VjyVCwxZoEHo-wn6iEyv1uC7WFfqmmsAYZgYQ_tpjUQVav8w8aczz-Gw7dSlTQ=rw-w411',
    }
  ]

  bannerSet3 : Array<any> = [
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/fABUZ84xm5V23bJOjmsoRgTpr6izWOtvKUkSFfEQgTtM_gHAFYfFVUbbeCdBM881nqWnMxvXTskoqDBcuVxU1IjAAD6RU3f_vg=rw-w411',
    },
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/FKOaZXf-l_DOJt0oG9J2syRTg4IGBh0Ki2wgbS4sLGclW0SVGLifcaM9A8PyjMy0TjPWD6yjwTGyG7Tbk_xZqpML3r0ehS0M=rw-w411',
    },
    {
      name: '25th',
      src: 'https://lh3.googleusercontent.com/hE0ioEWNkAM6CTuWWDZZKxLDqUQzjwTwKdBdhlYgiA6YfprwAG-eLGsFGWFw6Bv8emQkdMUyom-2JHnHmnRScruzMx3lm7XAzA=rw-w411',
    }
  ]

  brandArray : Array<any> = [
    {
      name: 'Asus',
      src: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=rw-w400'
    },
    {
      name: 'Microsoft',
      src: 'https://lh3.googleusercontent.com/Y8Y_q1dMIBq4VaovFtS-eJvQ8oqyVUjIcdxZDKQBKHMBjEP7E2iU6GE10Sjq0AdLPlmTw0NGTBpnq34SlUnkFxCS3X3Nag4=rw-w400'
    },
    {
      name: 'HP',
      src: 'https://lh3.googleusercontent.com/4YXRxEqxqmoY8EPliJtNkbcqQCUe4TPTJyAZ_MIsb8JStdwwf3PInwC0SABKuoZiHJC7dJY6Ex1JqS4bpKo=rw-w400'
    },
    {
      name: 'Lenovo',
      src: 'https://lh3.googleusercontent.com/zEZynY53RYop6V73LyabYKrT_c2ZAOk0yhkHgIKB-6UH-aoqVYlBjGZpQn6Eg-491y6Vf5GrMYL-iy3xsUNY4KSl0bPutOnk=rw-w400'
    },
    {
      name: 'Lenovo',
      src: 'https://lh3.googleusercontent.com/zEZynY53RYop6V73LyabYKrT_c2ZAOk0yhkHgIKB-6UH-aoqVYlBjGZpQn6Eg-491y6Vf5GrMYL-iy3xsUNY4KSl0bPutOnk=rw-w400'
    }
  ]

  categoryGrip1 : Array<any> = [];

  constructor(private category_sv: CategoryService) { }

  ngOnInit(): void {
    this.category_sv.getCategory().subscribe((data: any) => {
      this.categoryGrip1 = data.data;
      console.log(this.categoryGrip1);
    })
  }

}
