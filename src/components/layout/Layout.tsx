import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import useDialogStore from '@/store/useDialogStore';



export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here

  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <>
      <div className='bg-slate-100 dark:bg-zinc-800 '>
        <Header />
        {children}
        <Footer />
      </div>
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
    </>
  )
}
