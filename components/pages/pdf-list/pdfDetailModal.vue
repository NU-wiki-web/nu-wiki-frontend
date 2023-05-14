<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      @click.self="$emit('close')"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
      >
        <div class="bg-nu-quaternary px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <h3
              class="text-2xl font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              <!-- ファイル名のスロット -->
              <slot name="file_name"></slot>
            </h3>
          </div>
        </div>
        <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <!-- リンク -->
          <slot name="url"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
