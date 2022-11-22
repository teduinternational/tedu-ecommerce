import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class UtilityService {
  private _router: Router;

  constructor(router: Router) {
    this._router = router;
  }

  isEmpty(input){
    if(input == undefined || input == null || input == ''){
      return true;
    }
    return false;
  }

  convertDateTime(date: Date) {
    const formattedDate = new Date(date.toString());
    return formattedDate.toDateString();
  }

  navigate(path: string) {
    this._router.navigate([path]);
  }
  Unflattering = (arr: any[]): any[] => {
    let map = {};
    let roots: any[] = [];
    let node = {
      data: {
        Id: '',
        ParentId: ''
      },
      expanded: true,
      children: []
    };
    for (let index = 0; index < arr.length; index += 1) {
      map[arr[index].Id] = index; // initialize the map
      arr[index].data = this.getAllProperties(arr[index]); // initialize the data
      arr[index].children = []; // initialize the children
    }
    for (let i = 0; i < arr.length; i += 1) {
      node = arr[i];
      if (node.data.ParentId !== null && arr[map[node.data.ParentId]] != undefined) {
        arr[map[node.data.ParentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  UnFlatForLeftMenu = (arr: any[]): any[] => {
    let map = {};
    let roots: any[] = [];
    for (let i = 0; i < arr.length; i += 1) {
      let node = arr[i];
      node.children = [];
      map[node.id] = i; // use map to look-up the parents
      if (node.parentId !== null) {
        delete node['children'];
        arr[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }

    }
    return roots;
  }

  MakeSeoTitle(input: string) {
    if (input == undefined || input == '') {
      return '';
    }
    //Đổi chữ hoa thành chữ thường
    let slug = input.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
  }
  getDateFormatyyyymmdd(x) {
    let y = x.getFullYear().toString();
    let m = (x.getMonth() + 1).toString();
    let d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    let yyyymmdd = y + m + d;
    return yyyymmdd;
  }

  getAllProperties = (obj: object) => {
    const data = {};

    for (const [key, val] of Object.entries(obj)) {
      if (obj.hasOwnProperty(key)) {
        if (typeof val !== 'object') {
          data[key] = val;
        }
      }
    }
    return data;
  }
}
