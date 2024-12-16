<script setup>
  import { ref, watch, watchEffect } from 'vue';
  import NewsItem from './NewsItem.vue';

  const newsItems = ref([
    {
      title: 'К2Тех получил статус Золотого партнера РЕД СОФТ',
      details: 'ИТ-компания К2Тех получила сертификат, подтверждающий статус Золотого партнера российского разработчика программного обеспечения РЕД СОФТ. Компании совместно продвигают отечественные решения для построения и централизованного управления импортонезависимой ИТ-инфраструктурой.',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/317/42a/5ce/31742a5ce0d9d2b312df5529be722938.jpg'
    },
    {
      title: '«ВКонтакте» запустила функцию подтверждения бизнес-сообщества',
      details: '«ВКонтакте» запустила функцию подтверждения бизнес-сообществ с помощью VK Бизнес ID. В компании пояснили, что владельцы бизнес-сообществ могут получить отметку «Подтверждённый бизнес» через VK Бизнес ID – она отобразится в виде специальной серой галочки, которая подтверждает, что сообщество ведёт реальный бизнес, и поможет повысить доверие со стороны пользователей и привлечь к сообществу дополнительное внимание.',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/b32/1f9/e8c/b321f9e8cfb1ead7b66b1d0d3e92eb65.jpg'
    },
    {
      title: 'ТОП-5 ИБ-событий недели по версии Jet CSIRT',
      details: 'Сегодня в ТОП-5 — детальный анализ усиления атак группировки Head Mare на российские компании, разбор новой фишинговой кампании Cloud Atlas, исследование вредоносной кампании с использованием кроссплатформенного трояна, обзор новой вредоносной операции «Цифровой глаз», и глубокий технический разбор нового Linux-руткита Pumakit.',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/5a3/96a/7de/5a396a7deb038a6b315bb5107b08633d.jpg'
    },
    {
      title: '«Росатом» запустил первую лабораторию сертификации для КИИ',
      details: 'В «Росатоме» официально запущена первая лаборатория по сертификации решений автоматизированных систем управления технологическими процессами (АСУ ТП) для критической информационной инфраструктуры (КИИ). Испытательная лаборатория, созданная на базе АО «Росатом Автоматизированные системы управления» (АО «РАСУ»), получила аккредитацию и приступила к проверке оборудования на соответствие критериям доверенности. Этот проект реализован в рамках первого российского органа по сертификации доверенных программно‑аппаратных комплексов (ДПАК), основанного АО «Атомэнергопроект».',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/686/273/4e6/6862734e60f1c2965023e9ff71486fc4.jpg'
    },
    {
      title: '«Группа Астра» представила новую открытую среду разработки OpenIDE',
      details: 'В России представлена новая открытая среда разработки OpenIDE, которая позволит избежать лицензионных и санкционных рисков, а также расширит возможности российских разработчиков. Решение поддерживает современные языки программирования, предлагает интеграцию с отечественными решениями и включает маркетплейс плагинов.',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/19e/f34/a9e/19ef34a9e98efce1ad7d0f5821aa7557.jpg'
    },    
    {
      title: 'Selectel приобрела облачного провайдера servers.ru',
      details: 'Российский поставщик услуг облачной инфраструктуры и центров обработки данных Selectel завершил сделку по приобретению полного пакета акций ООО «Единая сеть», работающего под брендами servers.ru, exepto.ru и fozzy.ru, пишет РБК со ссылкой на представителя компании-приобретателя. Стоимость сделки составила менее 3,1 млрд руб.',
      img: 'https://habrastorage.org/r/w780/webt/tb/fw/uw/tbfwuwkvehzi8rqk0ou24vgdg_k.jpeg'
    },
    {
      title: 'Microsoft представила функцию для обмена файлами между iPhone и ПК на Windows',
      details: 'Microsoft представила функцию для обмена файлами между iPhone и компьютером под управлением Windows. Она похожа на технологию AirDrop, которая есть в экосистеме Apple.',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/9da/908/da7/9da908da7510067f9603487cf16427a3.jpg'
    },
    {
      title: 'Суд в США постановил заблокировать TikTok 19 января',
      details: 'Апелляционный суд в США отказался приостанавливать решение о блокировке TikTok 19 января 2025 года. В ноябре ходатайство о приостановке поступило от материнской компании ByteDance, которую американские власти склоняют к продаже социальной сети. В китайской компании рассчитывают, что новая администрация президента выскажет своё мнение относительно принятого закона.',
      img: 'https://habrastorage.org/r/w780/webt/aq/_p/ev/aq_pev3ihgaae8d6bjokxcpwsw8.jpeg'
    },
    {
      title: 'Школьников предлагают готовить к цифровой среде с раннего возраста',
      details: 'В образовательной системе процесс обучения основам информационной безопасности должен начинаться с первого класса, когда школьники получают доступ к электронной школе. Детей нужно этому учить с самого раннего возраста, как только они начинают использовать планшеты и другие цифровые устройства. Такое мнение выразил заместитель директора департамента государственной политики в сфере воспитания, дополнительного образования и детского отдыха Министерства просвещения РФ Владимир Кикнадзе.',
      img: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/9a7/194/ff1/9a7194ff1b53790d5c925f32a75498bb.jpeg'
    },
    {
      title: 'HDMI 2.2 дебютирует на выставке CES 2025',
      details: 'Новый стандарт HDMI представят на выставке CES 2025 в январе следующего года, сообщила организация HDMI Licensing Administration. По данным СМИ, стандарт будет называться HDMI 2.2 и обеспечит более высокие пропускную способность и разрешения, чем предшественник.',
      img: 'https://habrastorage.org/r/w780/webt/gi/7_/ls/gi7_ls0w0k5vdd5snaf14q0kkvk.jpeg'
    },
  ]);

  const selectedNews = ref(null);
  
  const handleSelect = (news) => {
    selectedNews.value = news;
  }
</script>

<template>  
  <div class="news-menu">
    <div class="current-news-item">
      <div class="current-news-item__content" v-if="selectedNews" :key="selectedNews.title">
        <h1 class="current-news-item__header">{{ selectedNews.props.title }}</h1>
        <p class="current-news-item__details">{{ selectedNews.props.details }}</p>
      </div>

      <h1 class="current-news-item--none" v-else>Выберите новость</h1>
    </div>

    <div class="news-selector">
      <h2 class="news-selector__header">Новости</h2>
      
      <div class="news-list">
        <NewsItem
          v-for="(news, index) in newsItems"
          :key="index"
          :title="news.title"
          :img="news.img"
          :details="news.details"
          @select="handleSelect" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .current-news-item > * {
    animation: shrink .5s forwards;
  }

  @keyframes shrink {
    from {
      transform: scale(0.85);
    }

    to {
      transform: scale(1);
    }
  }

  .news-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

    .current-news-item {
      overflow: hidden;
      overflow-y: auto;

      backdrop-filter: blur(1rem);
      border: 1px solid white;
      border-radius: 1rem;
      padding: 1rem;

      height: 23rem;
    }

      .current-news-item__header {
        font-weight: 600;
        font-size: 1.5rem;
      }

    .current-news-item--none {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      font-weight: 500;
    }

      .news-selector__header {
        margin-bottom: 1rem;
      }

      .news-list {
        backdrop-filter: blur(1rem);

        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        padding: 1rem;
        overflow: hidden;
        overflow-y: scroll;
        height: 20rem;
        border: 1px solid #fff;
        border-radius: 1rem;
      }
</style>
