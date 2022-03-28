import Image from 'next/image'
import user from './assets/img/user.gif'
export default function ListItem({ item }) {
    return (
      <article className="flex items-center content-center justify-between space-x-6 p-6">
        <div className='flex items-center content-center item-center space-x-6 justify-between'>
          <Image src={user} alt="" width="110" height="120" className="content-center flex-none h-70 w-70 rounded-full" />
          <div className="content-center justify-self-center relative cursor-pointer">
            <h2 className="text-2xl font-semibold text-slate-900 truncate pr-20">{item.title}</h2>
            <p className=''>{item.field_elsan_profession}</p>
            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
              <div>
                <a href='https://www.elsan.care/fr/clinique-saint-francois/accueil' className="text-yellow-500">Clinique Saint-François</a>
              </div>
            </dl>
            <a href={`tel:${item.field_vactory_telephone}`}>{`tel:${item.field_vactory_telephone}`}</a>
          </div>
        </div>
          {item.field_elsan_rdv && (
                <a href={item.field_elsan_rdv.uri} className=' w-40 content-center items-center sm:col-auto col-span-2  sm:justify-self-end  sm:my-0 my-3 sm:mr-7 mr-0  bg-yellow-500 text-white py-1 px-2 rounded-md font-medium shadow-lg'>
                  <i className='fa-solid fa-calendar-check pr-1'></i> Rendez-vous
                </a> 
              )}
        
      </article>
    )
  }