# Tema 2 MN

**Autor:** Ciotîrnae Alexandru-Cosmin (314CC)

**Punctaj pe checker-ul local:** 100p

**Obs:** Comentariile in cod sunt in limba engleza

## Task 1

### 1.1 Observatie _Plain Sound_ vs. _Plain Loop_

Plain Loop are in combinatie mult mai multe instrumente / game muzicale, asta ne dam seama din gama de culori rosu-galben care nu este concentrata neaparat pe anumite frecvente. Spre deosebire, Plain Loop are preponderent frecventele pe acea banda rosie, in jurul a 2000-3000Hz.

Daca ne uitam pe axa timp, vedem ca Plain Loop e relativ uniformizata. Desi sunt separari (acele lucruri cu aspect dreptunghic) care indica beat-urile, fiind mai multe instrumente spectograma e mai amestecata. Plain Loop are separari clare, adica beat-uri scurte si bruste, vazute prin acele dungi albastre, care indica ca nu exista niciun sunet in acea perioada de timp.

### 1.2 Observatie _Plain Sound_ vs. _High Pass Sound_

Plain Sound avea inainte niste frecvente rosii joase. Ce a facut practic filtrul high-pass a fost sa scape de ele. Acum daca ne uitam pe High Pass Sound, ele nu mai exista. Mai mult, culorile par mult mai deschise, mai ales unde inainte era albastru inchis in acele spatii goale. Din ce inteleg, ele sunt un fel de leak de la filtrul high-pass, iar imaginea nu se mai reconstituie identic. Oricum principalul scop al filtrului high-pass, care se si vede, e sa scape de frecventele joase.

### 1.3 Observatie _Plain Sound_ vs. _Reverb Sound_

Atunci cand am facut convolutia cu sunetul de pestera, efectul principal a fost ca sunetul sa se tot reflecte si sa devina mai sters, in ecou. Asta se vede pt ca inaginea e preponderent galben cu rosu, adica acum a fost atinsa toata gama de frecvente pentru ca s-a lovit sunetul de pereti. Acele lucruri care par ca niste munti rosii de se sterg apoi reprezinta sunetul care initial era clar, apoi lovit de pereti devine din ce in ce mai fad.

`mono = stereo_to_mono(stereo)`

`[S f t] = spectrogram(signal, fs, window_size)`

`x = oscillator(freq, fs, dur, A, D, S, R)`

`signal = high_pass(signal, fs, cutoff_freq)`

`signal = apply_reverb(signal, impulse_response)`

## Task 2

`[x, y] = parse_data(filename)`

`coef = spline_c2 (x, y)`

`y_interp = P_spline (coef, x, x_interp)`

`coef = vandermonde(x, y)`

`y_interp = P_vandermonde (coef, x_interp)`

## Task 3

`mat = read_mat(path)`

`reduced_mat = preprocess(mat, min_reviews)`

`similarity = cosine_similarity(A, B)`

`recoms = recommendations(path, liked_theme, num_recoms, min_reviews, num_features)`
