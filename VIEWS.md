# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna - 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Googla, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji/eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie info nt. rezerwacji
  - możliwość edycji i zapisywania zmian
- `/tables/booking/new`
  - jw. bez początkowych informacji
- `/tables/events/:id`
  - jw. dla eventów
- `/tables/events/new`
  - jw. bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach - stoliki
    - w kolumnach - informacje (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcję dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id`
  - jw.

# Widok kuchni

- `/kitchen`
  - wyświetlona lista zamówień w kolejności złożenia
    - lista musi zawierać nr stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - możliwość oznaczenia zamówienia jako zrealizowane
