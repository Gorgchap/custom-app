import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileInfo } from '@app/core/models/api';
import { ModalService } from '@app/core/services';
import { InfoService } from '@app/core/services/api';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
  error!: boolean;
  info!: string;
  loading!: boolean;

  private onDestroy$ = new Subject();

  constructor(private infoService: InfoService, private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.updateInfo();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  onDislike(): void {
    this.modalService.showStatusDialog('No match').afterClosed()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.updateInfo());
  }

  onLike(): void {
    this.modalService.showStatusDialog('You got a match').afterClosed()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.updateInfo());
  }

  updateInfo(): void {
    this.error = false;
    this.loading = true;
    this.infoService.getInfo()
      .pipe(
        finalize(() => this.loading = false),
        takeUntil(this.onDestroy$),
      )
      .subscribe({
        next: (info: FileInfo) => this.info = info.file,
        error: () => {
          this.error = true;
          this.modalService.showErrorDialog();
        },
      });
  }
}
