##EXERCISE 1.1
Below is a sequence of expressions. What is the result printed by the interpreter in response to each expression? Assume that the sequence is to be evaluated in the order in which it is presented.

INPUT                               OUTPUT          //NOTES
10                                  10  
(+ 5 3 4)                           12
(- 9 1)                             8
(/ 6 2)                             3
(+ (* 2 4) (- 4 6))                 10
(define a 3)                        Value: a        //NOTE: 3
(define b (+ a 1))                  Value: b        //NOTE: 4
(+ a b (* a b))                     19
(= a b)                             UNDEFINED(?)
(if (and (> b a) (< b (* a b)))     4               //NOTE: if ((b>3) and (b<12){
    b                                                           return b
    a)                                                       } else return a;
(cond ((= a 4) 6)                   16                
      ((= b 4) (+ 6 7 a))
      (else 25))
(+ 2 (if (> b a) b a))              6               
(* (cond ((> a b) a)                16
         ((< a b) b)
         (else -1))
   (+ a 1))




##EXERCISE 1.2
Translate the given expression into prefix form
ANSWER:
(/ (+ 4 5 (- 2 (- 3 (+ 6 (/ 4 3))))) (* 3 (- 6 2) (- 2 7))))
Numerator: (+ 4 5 (- 2 (- 3 (+ 6 (/ 4 3)))))
Denominator: (* 3 (- 6 2) (- 2 7)))



##EXERCISE 1.3
Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.

ANSWER:
(define (square z) (* z z))

(if ((> a b) (define largerab a)) (define largerab b)) 
(if ((> a c) (define largerac a)) (define largerac c))
(if ((> b c) (define largerbc b)) (define largerbc c))

(if (and (> largerab largerac) (> largerab largerbc)) define largest largerab) 
(if (and (> largerac largerab) (> largerac largerbc)) define largest largerac) 
(if (and (> largerbc largerab) (> largerbc largerac)) define largest largerbc) 

(if (and (< largerab largerac) (> largerab largerbc)) define middle largerab) 
(if (and (> largerab largerac) (< largerab largerbc)) define middle largerab) 

(if (and (< largerac largerab) (> largerac largerbc)) define middle largerac) 
(if (and (> largerac largerab) (< largerac largerbc)) define middle largerac) 

(if (and (< largerbc largerab) (> largerbc largerac)) define middle largerbc) 
(if (and (> largerbc largerab) (< largerbc largerac)) define middle largerbc) 

(define answer (+ middle largest))
