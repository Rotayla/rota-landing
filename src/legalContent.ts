export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export type LegalPageContent = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: Record<string, LegalPageContent> = {
  "/privacy": {
    title: "Gizlilik Politikası",
    intro:
      "Rota, güvenli ve saygılı tanışma deneyimi sunarken kişisel verilerin gizliliğine önem verir. Bu metin, Rota’yı kullanırken hangi verilerin işlenebileceğini ve bu verilerin hangi amaçlarla kullanılabileceğini açıklar.",
    sections: [
      {
        heading: "Topladığımız veriler",
        body: [
          "Rota; e-posta adresi, ad soyad ve profil bilgileri, doğum tarihi veya yaş, şehir, fotoğraflar, mesajlar, beğeni, eşleşme ve profil görüntüleme verileri, premium abonelik durumu ile cihaz ve oturum bilgilerini işleyebilir.",
          "Bu veriler, uygulamanın temel özelliklerini sunmak, güvenliği sağlamak ve kullanıcı deneyimini geliştirmek için gerekli olduğu ölçüde kullanılır.",
        ],
      },
      {
        heading: "Verileri kullanım amaçlarımız",
        list: [
          "Hesap oluşturma ve giriş işlemlerini yürütmek",
          "Profil oluşturma ve profil özelliklerini sunmak",
          "Eşleşme ve mesajlaşma özelliklerini çalıştırmak",
          "Güvenlik, kötüye kullanım önleme ve topluluk kurallarını uygulamak",
          "Premium abonelik durumunu yönetmek",
          "Uygulama performansını ve kullanıcı deneyimini iyileştirmek",
        ],
      },
      {
        heading: "Takip, reklam ve veri satışı",
        body: [
          "Rota, kullanıcı verilerini takip veya reklam amacıyla üçüncü taraflara satmaz. Gerekli hizmet sağlayıcılarla veri paylaşımı yapılması halinde bu paylaşım yalnızca uygulamanın çalışması, güvenlik, destek veya yasal yükümlülükler gibi sınırlı amaçlarla yapılır.",
        ],
      },
      {
        heading: "Hesap ve veri silme hakkı",
        body: [
          "Kullanıcılar hesaplarının silinmesini ve kişisel verilerinin silinmesini talep edebilir. Talepler için destek@rotayla.com adresinden bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  "/kvkk": {
    title: "KVKK Aydınlatma Metni",
    intro:
      "Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Türkiye’deki kullanıcıları bilgilendirmek amacıyla hazırlanmıştır.",
    sections: [
      {
        heading: "Veri sorumlusu",
        body: [
          "Veri sorumlusu: [Şirket/Kişi Adı]",
          "E-posta: [E-posta]",
          "Adres: [Adres]",
          "Destek iletişimi: destek@rotayla.com",
        ],
      },
      {
        heading: "İşlenen kişisel veri kategorileri",
        body: [
          "Kimlik ve iletişim bilgileri, profil bilgileri, doğum tarihi veya yaş, şehir, fotoğraflar, mesajlaşma verileri, beğeni, eşleşme ve profil görüntüleme verileri, premium abonelik durumu ile cihaz ve oturum bilgileri işlenebilir.",
        ],
      },
      {
        heading: "İşleme amaçları",
        list: [
          "Hesap oluşturma, giriş ve kullanıcı doğrulama süreçlerini yürütmek",
          "Profil, eşleşme ve mesajlaşma özelliklerini sunmak",
          "Güvenlik, şikayet, engelleme ve kötüye kullanım önleme süreçlerini yürütmek",
          "Premium abonelik yönetimi ve destek süreçlerini sağlamak",
          "Uygulama performansını, hata takibini ve hizmet kalitesini iyileştirmek",
          "Yasal yükümlülüklerin yerine getirilmesini sağlamak",
        ],
      },
      {
        heading: "Hukuki sebepler ve toplama yöntemi",
        body: [
          "Kişisel veriler; uygulama, web sitesi, destek iletişimi ve cihaz/oturum kayıtları üzerinden elektronik ortamda toplanabilir.",
          "Veriler; sözleşmenin kurulması veya ifası, hukuki yükümlülüklerin yerine getirilmesi, meşru menfaat, bir hakkın tesisi, kullanılması veya korunması ve gerekli hallerde açık rıza hukuki sebeplerine dayanılarak işlenebilir.",
        ],
      },
      {
        heading: "Aktarım",
        body: [
          "Kişisel veriler, yalnızca hizmetin sunulması, altyapı, güvenlik, destek, ödeme/abonelik yönetimi ve yasal yükümlülükler kapsamında gerekli hizmet sağlayıcılar, yetkili kamu kurumları veya yasal mercilerle paylaşılabilir.",
        ],
      },
      {
        heading: "Haklarınız",
        body: [
          "KVKK’nın 11. maddesi kapsamındaki haklarınızı kullanmak için destek@rotayla.com adresinden bize ulaşabilirsiniz. Başvurularınız yürürlükteki mevzuata uygun şekilde değerlendirilir.",
        ],
      },
    ],
  },
  "/terms": {
    title: "Kullanım Şartları",
    intro:
      "Rota, güvenli ve saygılı tanışma deneyimi için hazırlanmış bir mobil uygulamadır. Uygulamayı kullanarak bu şartlara ve topluluk kurallarına uygun davranmayı kabul edersiniz.",
    sections: [
      {
        heading: "Yaş sınırı",
        body: [
          "Rota yalnızca 18 yaş ve üzerindeki kullanıcılar içindir. 18 yaş altı kullanıma izin verilmez.",
        ],
      },
      {
        heading: "Yasak davranışlar",
        list: [
          "Sahte profil oluşturmak",
          "Taciz, tehdit veya baskı içeren davranışlarda bulunmak",
          "Nefret söylemi veya ayrımcı ifade kullanmak",
          "Uygunsuz fotoğraf paylaşmak",
          "Dolandırıcılık veya maddi çıkar amaçlı yönlendirme yapmak",
          "Spam göndermek",
          "Başkasının kimliğine bürünmek",
        ],
      },
      {
        heading: "Hesap işlemleri",
        body: [
          "Rota, güvenliği korumak ve topluluk kurallarını uygulamak amacıyla ihlal tespit edilen hesapları inceleme, askıya alma veya silme hakkını saklı tutar.",
        ],
      },
      {
        heading: "Premium abonelikler",
        body: [
          "Premium abonelikler App Store üzerinden yönetilir. Abonelik yenileme, iptal, iade ve ödeme süreçleri Apple’ın ilgili kuralları ve kullanıcı hesabı ayarları üzerinden yürütülür.",
        ],
      },
      {
        heading: "Destek",
        body: [
          "Kullanım şartlarıyla ilgili sorularınız için destek@rotayla.com adresinden bize ulaşabilirsiniz.",
        ],
      },
    ],
  },
  "/community": {
    title: "Topluluk Kuralları",
    intro:
      "Rota’da herkesin kendini güvende ve saygı görmüş hissetmesini isteriz. Bu kurallar, tanışma deneyimini daha sağlıklı ve güvenli tutmak için vardır.",
    sections: [
      {
        heading: "Saygılı ol",
        body: [
          "Karşındaki kişinin sınırlarına, zamanına ve kararlarına saygı göster. Israrcı, kırıcı veya rahatsız edici iletişim kurma.",
        ],
      },
      {
        heading: "Gerçek profil kullan",
        body: [
          "Kendine ait doğru bilgiler ve uygun fotoğraflar kullan. Başkasının kimliğine bürünme veya yanıltıcı profil oluşturma.",
        ],
      },
      {
        heading: "Güvenliği önemse",
        body: [
          "Tehdit, taciz, nefret söylemi, dolandırıcılık, spam ve uygunsuz içerik Rota’da kabul edilmez.",
        ],
      },
      {
        heading: "Sorunları bildir",
        body: [
          "Rahatsız edici bir durumla karşılaşırsan şikayet ve engelleme araçlarını kullanabilir veya destek ekibine yazabilirsin.",
        ],
      },
    ],
  },
  "/support": {
    title: "Destek",
    intro:
      "Rota ile ilgili destek talepleriniz için destek@rotayla.com adresinden bize ulaşabilirsiniz. Talebinizi incelerken hesabınızla ilişkili e-posta adresini kullanmanız süreci hızlandırır.",
    sections: [
      {
        heading: "Hesap silme",
        body: [
          "Hesabınızın silinmesini istemek için destek@rotayla.com adresine e-posta gönderebilirsiniz. Talebiniz doğrulandıktan sonra hesap ve ilgili veri silme süreci başlatılır.",
        ],
      },
      {
        heading: "Şifre yenileme",
        body: [
          "Giriş veya şifre yenileme konusunda sorun yaşıyorsanız destek ekibine yazın. Hesap güvenliği için sizden ek doğrulama bilgileri istenebilir.",
        ],
      },
      {
        heading: "Güvenlik bildirimi",
        body: [
          "Taciz, sahte profil, tehdit, dolandırıcılık veya uygunsuz içerik bildirimleri için olayın kısa açıklamasını ve varsa ilgili ekran görüntülerini destek e-postasına iletebilirsiniz.",
        ],
      },
      {
        heading: "Premium destek",
        body: [
          "Premium abonelik durumunuzla ilgili sorular için destek@rotayla.com adresinden bize ulaşabilirsiniz. App Store üzerinden yapılan aboneliklerin iptal ve ödeme işlemleri Apple hesabınızdan yönetilir.",
        ],
      },
    ],
  },
};

export const routeAliases: Record<string, string> = {
  "/gizlilik-politikasi": "/privacy",
  "/kullanim-sartlari": "/terms",
  "/destek": "/support",
};
