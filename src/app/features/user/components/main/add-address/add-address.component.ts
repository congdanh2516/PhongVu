import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../../../services/address/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnChanges {

  @Input()addressId: string = ''; //neu co addressId laf modify, rong la them moi
  addressInfo:  FormGroup;
  isLoading: boolean = false;
  province: any = [
    { code: 67, name: 'An Giang'},
    { code: 65, name: 'Can Tho'}
  ]
  district: any = [
    { code : 1, name: 'Chau Thanh', provinceCode: 67},
    { code : 2, name: 'Long Xuyen City', provinceCode: 67},
    { code : 3, name: 'Ninh Kieu', provinceCode: 65}
  ]
  ward: any = [
    { name: 'Can Dang', districtCode: 1},
    { name: 'Binh Hoa', districtCode: 1},
    { name: 'My Binh', districtCode: 2},
    { name: 'My Binh', districtCode: 2},
    { name: 'Xuan Khanh', districtCode: 3},
    { name: 'Hung Loi', districtCode: 3},
  ]
  districtCurrent: any = [];
  wardCurrent: any = [];

  constructor(private fb: FormBuilder, private address_sv: AddressService) {
    this.addressInfo = this.fb.group({
      fullName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      country: 'VN',
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      address: ['', [Validators.required]],
      isDefault: [false, [Validators.required]],
    })
  }
  ngOnChanges() {
    if(this.addressId != '') {
      this.addressInfo.reset();
      this.isLoading = true;
      this.address_sv.getAddressById(this.addressId).subscribe((data: any) => {
        console.log("Address: ", data.data);
        let address = data.data;
        this.addressInfo.get('fullName')?.setValue(address.fullName);
        this.addressInfo.get('phone')?.setValue(address.phone);
        this.addressInfo.get('email')?.setValue(address.email);
        this.addressInfo.get('city')?.setValue(address.city);
        this.addressInfo.get('district')?.setValue(address.district);
        this.addressInfo.get('ward')?.setValue(address.ward);
        this.addressInfo.get('address')?.setValue(address.address);
        this.addressInfo.get('isDefault')?.setValue(address.isDefault);
        this.isLoading = false;
      })
    }
    else {
      this.addressInfo.reset();
    }
  }

  ngOnInit(): void {
    this.address_sv.getAddress().subscribe((data) => {
      console.log("Get address: ", data);
    })
  }

  changeProvince(provinceCode: any){
    this.districtCurrent = [];
    console.log("sdfsg", typeof provinceCode.target.value);
    this.district.forEach((district: any) => {
      if(district.provinceCode.toString() == provinceCode.target.value) {
        console.log("adb");
        this.districtCurrent.push(district);
      }
    });
    console.log(this.districtCurrent);
  }

  changeDistrict(districtCode: any){
    this.wardCurrent = [];
    console.log("dis: ", districtCode.target.value);
    this.ward.forEach((ward: any) => {
      if(ward.districtCode.toString() == districtCode.target.value) {
        console.log("adb");
        this.wardCurrent.push(ward);
      }
    });
  }

  addNewAddress() {
    console.log("Address: ", this.addressInfo.value);
    if(this.addressId == '') {
      this.address_sv.addNewAddress(this.addressInfo.value).subscribe();
    }
    else {
      console.log(this.addressInfo.value);
      this.addressInfo.value.id = this.addressId;
      this.address_sv.modifyAddress(this.addressInfo.value).subscribe();
    }
  }
}
