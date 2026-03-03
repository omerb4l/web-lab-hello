# CSS Kararları

## 1. Breakpoint Seçimi
- Projede 640px (Tablet) ve 1024px (Masaüstü) kırılım noktalarını (breakpoint) seçtim.
- İçeriğim bu noktalarda mobil dikey dizilimden (vertical stack), tablet yatay dizilimine (horizontal flow) ve masaüstü merkezlenmiş geniş yerleşime (centered wide layout) geçiş yapıyor.

## 2. Layout Tercihleri
- **Header:** Tek boyutlu hizalama ve esneklik sağladığı için Flexbox tercih ettim. Mobilde dikey, tablette yatay dizilimi kolayca yönetebiliyorum.
- **Proje Kartları:** İki boyutlu ızgara düzeni (satır ve sütun) gerektirdiği için CSS Grid tercih ettim. `auto-fit` ve `minmax` özellikleri ile media query yazmadan responsive bir ızgara elde ettim.

## 3. Design Tokens
- **Renk Paleti:** Temiz ve profesyonel bir görünüm için ana renk olarak koyu mavi (#1E3A8A) ve vurgu rengi olarak canlı mavi (#2563EB) seçtim.
- **Spacing Skalası:** 0.25rem'den 4rem'e kadar değişen tutarlı bir boşluk skalası (--space-*) kullandım.
- **Fluid Typography:** Yazı boyutları için `clamp()` fonksiyonunu kullanarak fontların ekran genişliğine göre akıcı (fluid) şekilde ölçeklenmesini sağladım.

## 4. Responsive Stratejiler
- **Mobile-First:** CSS yazmaya en küçük ekran (mobil) kurallarıyla başladım ve `min-width` media query'leri ile büyük ekranlara doğru zenginleştirdim.
- **Görsel Yönetimi:** Görsellerin kapsayıcılarına sığması için `max-width: 100%` ve kartlardaki görsellerin tutarlı görünmesi için `object-fit: cover` kullandım.
