var subArrays = [];
module.exports = {
    //param A : array of integers
    //param B : array of integers
    //return a array of integers
    getAllSubArrays: function (A) {
        let subArrays = [];
        let G = [];
        for (let i = 0; i < A.length; i++) {
            subArrays.push([A[i]]);
            G.push(A[i]);
            for (let j = i + 1; j < A.length; j++) {
                let lastCreated = subArrays[subArrays.length - 1];
                subArrays.shift();
                lastCreated = lastCreated.concat(A[j]);
                subArrays.push(lastCreated);
                G.push(Math.max(...lastCreated));
            }
        }
        return G;
    },

    getMaxArray: function (A) {
        let G = []
        for (let i = 0; i < A.length; i++) {
            G.push(Math.max(...A[i]));
        }
        return G;
    },

    findDivisors: function (n) {
        let product = 1;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n / i == i) {
                product = product * i;
            } else if (n % i == 0) {
                product = product * i * (n / i);
            }
        }
        return product % 1000000007;
    },

    replaceWithDivisors: function (G) {
        for (let i = 0; i < G.length; i++) {
            G[i] = this.findDivisors(G[i]);
        }
    },

    solve: function (A, B) {
        //this.gSubArrays(A, 0, 0);
        //this.printPowerSet(A, A.length);
        let G = this.getAllSubArrays(A);
        //console.log('subArrays-', subArrays )
        //let G = this.getMaxArray(subArrays);
        //console.log('G-', G )
        this.replaceWithDivisors(G);
        //console.log('divisors-', G )
        G = G.sort((a, b) => b - a);
        //console.log('sort-', G )
        let result = [];
        for (let i = 0; i < B.length; i++) {
            B[i] = G[B[i] - 1];
        }
        subArrays = [];
        return B
    }
};
