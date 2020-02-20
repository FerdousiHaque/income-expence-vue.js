const app = new Vue({
  el:'#app',
  data: {
    incomes:[],
    newIncome:null,
    expances:[],
    newExpance:null,
    iselect:[],
    itype:null,
    eselect:[],
    etype:null
  },
  mounted() {
    
    if(localStorage.getItem('incomes')) {
      try {
        this.incomes = JSON.parse(localStorage.getItem('incomes'));
      } catch(e) {
        localStorage.removeItem('incomes');
      }
    }

    if(localStorage.getItem('expances')) {
      try {
        this.expances = JSON.parse(localStorage.getItem('expances'));
      } catch(e) {
        localStorage.removeItem('expances');
      }
    }
    if(localStorage.getItem('iselect')) {
      try {
        this.iselect = JSON.parse(localStorage.getItem('iselect'));
      } catch(e) {
        localStorage.removeItem('iselect');
      }
    }
    if(localStorage.getItem('eselect')) {
      try {
        this.eselect = JSON.parse(localStorage.getItem('eselect'));
      } catch(e) {
        localStorage.removeItem('eselect');
      }
    }
  },

  methods: {
    addIncome() {
      if(!this.newIncome) return;
      this.incomes.push(this.newIncome);
      this.newIncome = '';
      
      if(!this.itype) return;
      this.iselect.push(this.itype);
      this.itype = '';
      this.saveIncomes();
    },
    removeIncome(x) {
      this.incomes.splice(x,1);
      
      this.iselect.splice(x,1);
      this.saveIncomes();
    },
    saveIncomes() {
      let parsed = JSON.stringify(this.incomes);
      localStorage.setItem('incomes', parsed);
      parsed = JSON.stringify(this.iselect);
      localStorage.setItem('iselect', parsed);
    },
    addExpance() {
      if(!this.newExpance) return;
      this.expances.push(this.newExpance);
      this.newExpance = '';
      
      if(!this.etype) return;
      this.eselect.push(this.etype);
      this.etype = '';
      this.saveExpances();
    },
    removeExpance(x) {
      this.expances.splice(x,1);
      
      this.eselect.splice(x,1);
      this.saveExpances();
    },
    saveExpances() {
      let parsed = JSON.stringify(this.expances);
      localStorage.setItem('expances', parsed);
      parsed = JSON.stringify(this.eselect);
      localStorage.setItem('eselect', parsed);
    }
  },
  computed: {
    totalIncome: function () {
      var itotal = this.incomes[0]
      for (let i = 1; i < this.incomes.length; i++)
      {
        itotal = itotal + this.incomes[i];
      }
      return itotal
    },
    totalExpaces: function () {
      var etotal = this.expances[0]
      for (let i = 1; i < this.expances.length; i++)
      {
        etotal = etotal + this.expances[i];
      }
      return etotal
    }
  }
})