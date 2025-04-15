const picker = datepicker('input',
    {
        formatter: (input, date, instance) => {
          const value = date.toLocaleDateString()
          input.value = value // => '1/1/2099'
        }
    }
)

// var dur = Duration.fromObject({years:})