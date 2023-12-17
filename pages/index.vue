<template>
  <UiHeader></UiHeader>
  <div class="flex h-screen flex-col justify-between">
    <div class="flex flex-col items-center justify-center bg-[#4a8a8a] py-8">
      <div class="py-4 text-4xl font-bold text-white">NU-wiki</div>
      <div class="text-lg text-white">名大生のための情報共有サイト</div>
    </div>
    <div class="p-4">
      <div class="flex flex-col items-center justify-around">
        <div class="flex flex-col items-center py-4 md:p-8">
          <div>過去問難民よ、立ち上がれ。</div>
          <div class="text-4xl font-bold">過去問を共有しよう</div>
        </div>
        <div>
          <NuxtLink
            to="/login"
            type="button"
            class="w-full cursor-pointer bg-[#4a8a8a] p-2 text-center font-bold text-white"
            tabindex="0"
          >
            ログインする
          </NuxtLink>
          <div class="py-1">
            名大のメールアドレスを持っている人しかログインできません。
          </div>
        </div>
        <div class="my-4 w-full justify-center md:flex md:space-x-4">
          <div class="my-2 w-full border border-[#4a8a8a] md:w-80">
            <div class="bg-[#4a8a8a] py-2 text-center font-bold text-white">
              過去問を投稿
            </div>
            <div>
              <ul class="list-inside list-disc p-4">
                <li>過去問を投稿する</li>
                <li>過去問を検索する</li>
                <li>過去問をダウンロードする</li>
              </ul>
            </div>
          </div>
          <div class="my-2 w-full border border-[#4a8a8a] md:w-80">
            <div class="bg-[#4a8a8a] py-2 text-center font-bold text-white">
              自分の回答を投稿
            </div>
            <div>
              <ul class="list-inside list-disc p-4">
                <li>自分の回答を投稿する</li>
                <li>自分の回答を検索する</li>
                <li>自分の回答をダウンロードする</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between bg-[#263959] p-4 text-white">
      <div class="px-4">2023@NU-wiki</div>
      <div class="md:w-96">
        <p>情報学部・工学部の有志10名ほどで開発・運営しています。</p>
        <p>NU-wikiに関するお問い合わせはこちら→</p>
      </div>
    </div>
  </div>
</template>
