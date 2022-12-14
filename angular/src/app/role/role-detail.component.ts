import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RoleDto, RolesService } from '@proxy/roles';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  templateUrl: 'role-detail.component.html',
})
export class RoleDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  // Default
  public blockedPanelDetail: boolean = false;
  public form: FormGroup;
  public title: string;
  public btnDisabled = false;
  public saveBtnName: string;
  public closeBtnName: string;
  selectedEntity = {} as RoleDto;

  formSavedEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private roleService: RolesService,
    public authService: AuthService,
    private utilService: UtilityService,
    private fb: FormBuilder
  ) {}

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public generateSlug() {
    var slug = this.utilService.MakeSeoTitle(this.form.get('name').value);
    this.form.controls['slug'].setValue(slug);
  }
  ngOnInit() {
    this.buildForm();
    if (this.utilService.isEmpty(this.config.data?.id) == false) {
      this.loadDetail(this.config.data.id);
      this.saveBtnName = 'Cập nhật';
      this.closeBtnName = 'Hủy';
    } else {
      this.saveBtnName = 'Thêm';
      this.closeBtnName = 'Đóng';
    }
  }

  // Validate
  noSpecial: RegExp = /^[^<>*!_~]+$/;
  validationMessages = {
    name: [
      { type: 'required', message: 'Bạn phải nhập tên nhóm' },
      { type: 'minlength', message: 'Bạn phải nhập ít nhất 3 kí tự' },
      { type: 'maxlength', message: 'Bạn không được nhập quá 255 kí tự' },
    ],
    description: [{ type: 'required', message: 'Bạn phải mô tả' }],
  };

  loadDetail(id: any) {
    this.toggleBlockUI(true);
    this.roleService
      .get(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: RoleDto) => {
          this.selectedEntity = response;
          this.buildForm();
          this.toggleBlockUI(false);
        },
        error: () => {
          this.toggleBlockUI(false);
        },
      });
  }
  saveChange() {
    this.toggleBlockUI(true);

    this.saveData();
  }

  private saveData() {
    if (this.utilService.isEmpty(this.config.data?.id)) {
      this.roleService
        .create(this.form.value)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          this.ref.close(this.form.value);
          this.toggleBlockUI(false);
        });
    } else {
      this.roleService
        .update(this.config.data.id, this.form.value)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          this.toggleBlockUI(false);
          this.ref.close(this.form.value);
        });
    }
  }

  buildForm() {
    this.form = this.fb.group({
      name: new FormControl(
        this.selectedEntity.name || null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
        ])
      ),
      description: new FormControl(this.selectedEntity.description || null),
    });
  }

  private toggleBlockUI(enabled: boolean) {
    if (enabled == true) {
      this.btnDisabled = true;
      this.blockedPanelDetail = true;
    } else {
      setTimeout(() => {
        this.btnDisabled = false;
        this.blockedPanelDetail = false;
      }, 1000);
    }
  }
}
