import React from 'react'
import Link from 'next/link'

function signup () {
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up</h1>
              <p className="py-6">Sign Up to create an account and place an order.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Re-enter Password</span>
                  </label>
                  <input type="text" placeholder="Re-enter password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                  <Link href='menu' className="btn btn-primary">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
            )
        }

export default signup